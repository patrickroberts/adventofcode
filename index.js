import { fork } from 'child_process';
import { promises } from 'fs';
import { dirname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.argv.length <= 2) {
  console.log(`Usage: node ${relative('.', __filename)} YYYY`);
  process.exit(1);
}

const year = process.argv[2];
const days = await promises.readdir(
  resolve(__dirname, year),
  { withFileTypes: true },
);

for (const day of days) {
  if (!day.isDirectory() || !/^day(?:[01]\d|2[0-5])$/.test(day.name)) {
    continue;
  }

  const parts = await promises.readdir(
    resolve(__dirname, year, day.name),
    { withFileTypes: true },
  );

  for (const part of parts) {
    if (!part.isFile() || !/^part[12].js$/.test(part.name)) {
      continue;
    }

    const path = resolve(__dirname, year, day.name, part.name);

    process.stdout.write(`${relative(__dirname, path)}: `);

    const code = await new Promise(resolve => {
      fork(path).on('exit', resolve);
    });

    if (code !== 0 && code !== 13) {
      process.exit(code);
    }
  }
}
