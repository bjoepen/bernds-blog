import { access, readFile } from 'node:fs/promises';

const files = [
  'public/admin/index.html',
  'public/admin/config.yml',
  'public/images/reisen/uploads'
];

const errors = [];

for (const file of files) {
  try {
    await access(file);
  } catch {
    errors.push(`${file}: fehlt`);
  }
}

try {
  const config = await readFile('public/admin/config.yml', 'utf8');
  if (config.includes('REPLACE_WITH_GITHUB_OWNER')) {
    errors.push('public/admin/config.yml: GitHub-Repository ist noch nicht konfiguriert');
  }
  if (!config.includes('default: true') || !config.includes('name: draft')) {
    errors.push('public/admin/config.yml: Draft-Standard fehlt');
  }
} catch {}

if (errors.length) {
  console.error('Sveltia-CMS-Prüfung fehlgeschlagen:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Sveltia CMS ist vollständig konfiguriert.');
