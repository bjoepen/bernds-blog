import { spawnSync } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function run(label, args) {
  console.log(`\n▶ ${label}\n`);
  const result = spawnSync(npmCommand, args, { stdio: 'inherit', shell: false });
  if (result.error || result.status !== 0) {
    console.error(`\nSetup abgebrochen: ${label}`);
    process.exit(result.status || 1);
  }
}

console.log('Bernds Blog – geführte Einrichtung');
run('System prüfen', ['run', 'doctor']);
run('Metadaten bereinigen', ['run', 'metadata:clean']);
run('Abhängigkeiten installieren', ['run', 'install:project']);
run('Projekt verifizieren', ['run', 'verify']);
console.log('\n✓ Einrichtung erfolgreich. Start: npm run dev');
