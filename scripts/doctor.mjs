import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const root = process.cwd();
const results = [];

function add(level, name, detail) {
  results.push({ level, name, detail });
}

function command(name, args = []) {
  try {
    return execFileSync(name, args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    }).trim();
  } catch {
    return null;
  }
}

const [major, minor] = process.versions.node.split('.').map(Number);
add(
  major > 22 || (major === 22 && minor >= 12) ? 'ok' : 'error',
  'Node.js',
  `gefunden: ${process.versions.node}; benötigt: mindestens 22.12`
);

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npmVersion = command(npmCmd, ['--version']);
add(npmVersion ? 'ok' : 'error', 'npm', npmVersion || 'nicht gefunden');

const registry = command(npmCmd, ['config', 'get', 'registry']);
add(
  registry === 'https://registry.npmjs.org/' ? 'ok' : 'error',
  'npm Registry',
  registry || 'nicht ermittelbar'
);

for (const file of ['package.json', 'package-lock.json', '.npmrc', 'astro.config.mjs']) {
  try {
    await access(join(root, file), constants.R_OK);
    add('ok', file, 'vorhanden');
  } catch {
    add('error', file, 'fehlt');
  }
}

const executable = process.platform === 'win32' ? 'astro.cmd' : 'astro';
const astroBinary = join(root, 'node_modules', '.bin', executable);
const astroPresent = await access(astroBinary, constants.X_OK)
  .then(() => true)
  .catch(() => false);

add(
  astroPresent ? 'ok' : 'warning',
  'Astro CLI',
  astroPresent ? 'installiert' : 'noch nicht installiert; npm run install:project ausführen'
);

console.log('\nBernds Blog – Systemdiagnose\n');

let errors = 0;
let warnings = 0;
for (const item of results) {
  const symbol = item.level === 'ok' ? '✓' : item.level === 'warning' ? '!' : '✗';
  console.log(`${symbol} ${item.name}: ${item.detail}`);
  if (item.level === 'error') errors++;
  if (item.level === 'warning') warnings++;
}

console.log('');
if (errors) {
  console.log(`${errors} Fehler gefunden.`);
  process.exit(1);
}

if (warnings) {
  console.log(`Systemgrundlage in Ordnung; ${warnings} Hinweis(e) bleiben.`);
} else {
  console.log('Diagnose erfolgreich.');
}
