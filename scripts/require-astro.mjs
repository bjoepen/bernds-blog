import { spawnSync } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const result = spawnSync(
  npmCommand,
  ['exec', '--no', 'astro', '--', '--version'],
  {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: false
  }
);

if (result.error) {
  console.error('');
  console.error(`Astro-Prüfung konnte nicht gestartet werden: ${result.error.message}`);
  console.error('');
  console.error('Bitte zuerst ausführen: npm run install:project');
  console.error('');
  process.exit(1);
}

if (result.status !== 0) {
  console.error('');
  console.error('Astro ist nicht installiert oder über npm nicht verfügbar.');
  console.error('');
  console.error('Bitte zuerst ausführen:');
  console.error('  npm run install:project');
  console.error('');
  console.error('Alternativ:');
  console.error('  rm -rf node_modules');
  console.error('  npm ci --no-audit --no-fund');
  console.error('');
  process.exit(result.status || 1);
}

const version = result.stdout.trim() || 'Version erkannt';
console.log(`Astro CLI verfügbar: ${version}`);
