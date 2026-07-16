import { rm } from 'node:fs/promises';

for (const directory of ['dist', '.astro']) {
  await rm(directory, { recursive: true, force: true });
  console.log(`Entfernt: ${directory}`);
}
