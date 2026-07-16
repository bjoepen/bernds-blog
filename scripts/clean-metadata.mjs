import { readdir, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = process.cwd();
const excludedDirectories = new Set(['node_modules', 'dist', '.astro', '.git']);
const removableFiles = new Set(['.DS_Store']);
const removablePrefixes = ['._'];
const removableDirectories = new Set(['__MACOSX']);

let removed = 0;

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    const projectPath = relative(root, absolute) || entry.name;

    if (entry.isDirectory()) {
      if (removableDirectories.has(entry.name)) {
        await rm(absolute, { recursive: true, force: true });
        console.log(`Entfernt: ${projectPath}/`);
        removed += 1;
        continue;
      }

      if (excludedDirectories.has(entry.name)) continue;
      await walk(absolute);
      continue;
    }

    if (
      removableFiles.has(entry.name)
      || removablePrefixes.some((prefix) => entry.name.startsWith(prefix))
    ) {
      await rm(absolute, { force: true });
      console.log(`Entfernt: ${projectPath}`);
      removed += 1;
    }
  }
}

await walk(root);

if (removed === 0) {
  console.log('Keine macOS-Metadateien gefunden.');
} else {
  console.log(`${removed} macOS-Metadateneintrag/-einträge entfernt.`);
}
