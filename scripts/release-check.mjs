import { existsSync } from 'node:fs';
import { readFile, readdir, rm } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const excluded = new Set(['node_modules', 'dist', '.astro', '.git']);
const textExtensions = new Set([
  '.astro', '.css', '.html', '.js', '.json', '.md', '.mdx',
  '.mjs', '.ts', '.txt', '.xml', '.yaml', '.yml', '.svg'
]);

// Built dynamically so the checker can search for these strings without
// falsely detecting its own source code.
const forbidden = [
  ['packages', 'applied-caas-gateway'].join('.'),
  ['internal', 'api', 'openai', 'org'].join('.'),
  ['sandbox:', '/mnt/data/'].join(''),
  ['/', 'mnt', '/', 'data', '/'].join(''),
  ['/', 'tmp', '/'].join('')
];

const findings = [];
let cleaned = 0;

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    const projectPath = relative(root, absolute);

    // Dieses Skript enthält seine Prüfmuster absichtlich selbst.
    // Es darf deshalb nicht gegen seinen eigenen Quelltext geprüft werden.
    if (projectPath === 'scripts/release-check.mjs') continue;

    if (entry.isDirectory()) {
      if (entry.name === '__MACOSX') {
        await rm(absolute, { recursive: true, force: true });
        console.log(`Bereinigt: ${projectPath}/`);
        cleaned += 1;
        continue;
      }

      if (excluded.has(entry.name)) continue;
      await walk(absolute);
      continue;
    }

    if (entry.name === '.DS_Store' || entry.name.startsWith('._')) {
      await rm(absolute, { force: true });
      console.log(`Bereinigt: ${projectPath}`);
      cleaned += 1;
      continue;
    }

    if (!textExtensions.has(extname(entry.name)) && entry.name !== '.npmrc') {
      continue;
    }

    const content = await readFile(absolute, 'utf8');
    for (const token of forbidden) {
      if (content.includes(token)) {
        findings.push(`${projectPath}: enthält einen lokalen oder internen Pfad`);
      }
    }
  }
}

await walk(root);

// Eine .npmrc ist für ein normales Astro-Projekt optional. Falls sie vorhanden
// ist, wird weiterhin geprüft, ob die öffentliche npm-Registry verwendet wird.
const npmrcPath = join(root, '.npmrc');
if (existsSync(npmrcPath)) {
  const npmrc = await readFile(npmrcPath, 'utf8');
  if (!npmrc.includes('registry=https://registry.npmjs.org/')) {
    findings.push('.npmrc: öffentliche npm-Registry fehlt');
  }
} else {
  console.log('Hinweis: .npmrc nicht vorhanden – optionale Prüfung übersprungen.');
}

const lockPath = join(root, 'package-lock.json');
if (!existsSync(lockPath)) {
  findings.push('package-lock.json: Datei fehlt');
} else {
  const lock = await readFile(lockPath, 'utf8');
  if (
    lock.includes(['packages', 'applied-caas-gateway'].join('.'))
    || lock.includes(['internal', 'api', 'openai', 'org'].join('.'))
  ) {
    findings.push('package-lock.json: enthält interne Registry-Adressen');
  }
}

const packageJsonPath = join(root, 'package.json');
if (!existsSync(packageJsonPath)) {
  findings.push('package.json: Datei fehlt');
} else {
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));
  const approvals = packageJson.allowScripts || {};

  for (const required of ['esbuild@0.28.1', 'fsevents@2.3.3']) {
    if (approvals[required] !== true) {
      findings.push(`package.json: Installationsskript von ${required} ist nicht freigegeben`);
    }
  }
}

const requiredHeroFiles = [
  'public/images/heroes/northern-lines/hero-01-autoreisen.png',
  'public/images/heroes/northern-lines/hero-02-kreuzfahrten.png',
  'public/images/heroes/northern-lines/hero-03-nordsee.png',
  'public/images/heroes/northern-lines/hero-04-holland.png',
  'public/images/heroes/northern-lines/hero-05-hafen-sonnenuntergang.png',
  'public/images/heroes/northern-lines/hero-06-auslaufen.png',
  'public/images/heroes/northern-lines/hero-07-reisen.png',
  'public/images/heroes/northern-lines/hero-08-portrait.png',
  'public/images/heroes/northern-lines/hero-09-kamera-tal.png'
];

for (const file of requiredHeroFiles) {
  if (!existsSync(join(root, file))) {
    findings.push(`${file}: Hero-Datei fehlt`);
  }
}

const requiredCmsFiles = [
  'public/admin/index.html',
  'public/admin/config.yml',
  'frontmatter.json'
];

for (const file of requiredCmsFiles) {
  if (!existsSync(join(root, file))) {
    findings.push(`${file}: CMS-Datei fehlt`);
  }
}

const astroConfigPath = join(root, 'astro.config.mjs');
if (existsSync(astroConfigPath)) {
  const astroConfig = await readFile(astroConfigPath, 'utf8');
  if (!astroConfig.includes('northern-lines-admin-index-redirect')) {
    findings.push('astro.config.mjs: lokale Weiterleitung für /admin/ fehlt');
  }
}

if (findings.length > 0) {
  console.error('Release-Prüfung fehlgeschlagen:\n');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

if (cleaned > 0) {
  console.log(`${cleaned} macOS-Metadateneintrag/-einträge automatisch entfernt.`);
}

console.log('Release-Prüfung erfolgreich.');
console.log('- keine internen Registry-Adressen');
console.log('- keine lokalen Entwicklungs- oder Containerpfade');
console.log('- Installationsskripte geprüft');
console.log('- Hero Collection vollständig');
console.log('- Front Matter und Sveltia CMS vollständig');
console.log('- lokale /admin/-Weiterleitung vorhanden');
