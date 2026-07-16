import { readFile, writeFile } from 'node:fs/promises';
import process from 'node:process';

const [, , repository, authenticatorUrl] = process.argv;

if (!repository || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) {
  console.error('Verwendung: npm run cms:configure -- OWNER/REPOSITORY [AUTHENTICATOR_URL]');
  process.exit(1);
}

const configPath = new URL('../public/admin/config.yml', import.meta.url);
let config = await readFile(configPath, 'utf8');

config = config.replace(
  /repo:\s*[^\n]+/,
  `repo: ${repository}`
);

config = config.replace(/^\s*base_url:\s*[^\n]+\n?/m, '');

if (authenticatorUrl) {
  const normalized = authenticatorUrl.replace(/\/+$/, '');
  config = config.replace(
    /(\s+repo:\s*[^\n]+\n)/,
    `$1      base_url: ${normalized}\n`
  );
}

await writeFile(configPath, config, 'utf8');

console.log(`Sveltia CMS konfiguriert für ${repository}.`);
console.log(authenticatorUrl
  ? `OAuth-Authenticator: ${authenticatorUrl}`
  : 'Authentifizierung: GitHub Personal Access Token (Token-Login).'
);
