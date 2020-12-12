import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const adapters = Array.from(input.match(/\d+/g), Number).sort((a, b) => a - b);
const [differences] = adapters.reduce(
  ([diffs, prev], curr) => [diffs.concat(curr - prev), curr], [[], 0],
);
const count = (array, x) => array.reduce(
  (sum, y) => sum + Number(y === x), 0,
);
const product = count(differences, 1) * (count(differences, 3) + 1);

console.log(product);
