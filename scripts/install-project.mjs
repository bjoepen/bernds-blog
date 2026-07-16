import { spawnSync } from 'node:child_process';
import { access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const result = spawnSync(
  npmCommand,
  ['ci', '--no-audit', '--no-fund'],
  { stdio: 'inherit', shell: false }
);

if (result.error) {
  console.error(`npm konnte nicht gestartet werden: ${result.error.message}`);
  process.exit(1);
}
if (result.status !== 0) process.exit(result.status || 1);

const executable = process.platform === 'win32' ? 'astro.cmd' : 'astro';
const astroBinary = join(process.cwd(), 'node_modules', '.bin', executable);

try {
  await access(astroBinary, constants.X_OK);
  console.log(`✓ Astro CLI installiert: ${astroBinary}`);
} catch {
  console.error('Die Installation wurde beendet, aber Astro fehlt weiterhin.');
  process.exit(1);
}
