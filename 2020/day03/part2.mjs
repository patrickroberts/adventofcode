import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const slopes = process.argv.slice(2).map(Number);

let product = 1;

while (slopes.length > 0) {
  const [right, down] = slopes.splice(0, 2);
  let trees = 0;
  let index = 0;
  let x = right;
  let y = down;

  for (const [line] of input.matchAll(/.+/gm)) {
    if (index++ !== y) continue;

    if (line[x % line.length] === '#') {
      ++trees;
    }

    x += right;
    y += down;
  }

  product *= trees;
}

console.log(product);
