import { readFile, readdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';

const contentRoot = join(process.cwd(), 'src', 'content');

async function filesIn(folder) {
  const directory = join(contentRoot, folder);
  return (await readdir(directory))
    .filter((name) => ['.md', '.mdx'].includes(extname(name)))
    .map((name) => join(directory, name));
}

function frontMatterValue(text, key) {
  const block = text.match(/^---\n([\s\S]*?)\n---/);
  if (!block) return undefined;
  const match = block[1].match(new RegExp(`^${key}:\\s*["']?([^\\n"']+)["']?\\s*$`, 'm'));
  return match?.[1]?.trim();
}

const tripFiles = await filesIn('reisen');
const portFiles = await filesIn('haefen');
const dayFiles = await filesIn('reisetage');

const trips = new Set(tripFiles.map((file) => basename(file, extname(file))));
const ports = new Set(portFiles.map((file) => basename(file, extname(file))));
const dayKeys = new Set();
const errors = [];

for (const file of dayFiles) {
  const text = await readFile(file, 'utf8');
  const trip = frontMatterValue(text, 'trip');
  const day = frontMatterValue(text, 'day');
  const port = frontMatterValue(text, 'portSlug');

  if (!trip || !trips.has(trip)) {
    errors.push(`${basename(file)}: unbekannte Reise "${trip || 'FEHLT'}"`);
  }

  if (!day || !/^\d+$/.test(day)) {
    errors.push(`${basename(file)}: ungültiger Reisetag "${day || 'FEHLT'}"`);
  } else {
    const key = `${trip}:${day}`;
    if (dayKeys.has(key)) errors.push(`${basename(file)}: doppelter Schlüssel ${key}`);
    dayKeys.add(key);
  }

  if (port && !ports.has(port)) {
    errors.push(`${basename(file)}: unbekannter Hafen "${port}"`);
  }
}

if (errors.length > 0) {
  console.error('Inhaltsprüfung fehlgeschlagen:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Inhaltsprüfung erfolgreich: ${trips.size} Reise(n), `
  + `${dayFiles.length} Reisetag(e), ${ports.size} Hafenbeitrag/-beiträge.`
);
