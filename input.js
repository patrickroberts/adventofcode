import { promises } from 'fs';
import { dirname, resolve } from 'path';

const defaultPath = resolve(dirname(process.argv[1]), 'input.txt');
const [path = defaultPath] = process.argv.slice(2, 3);

export default await promises.readFile(path, 'utf8');
