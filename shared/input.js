import { promises } from 'fs';
import { dirname, resolve } from 'path';

const defaultPath = resolve(dirname(process.argv[1]), 'input.txt');
const [path = defaultPath] = process.argv.slice(2, 3);

let input;

try {
  input = await promises.readFile(path, 'utf8');
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

export default input;
