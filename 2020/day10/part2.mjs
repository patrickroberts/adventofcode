import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const adapters = Array.from(input.match(/\d+/g), Number).sort((a, b) => a - b);
const [diffs] = adapters.reduce(
  ([diffs, prev], curr) => [diffs.concat(curr - prev), curr], [[], 0],
);
const arrangements = [];

for (const [i, diff] of diffs.entries()) {
  let acc = diff;
  arrangements[i] = 0;

  for (let j = 0; i >= j && acc <= 3;) {
    ++j;
    arrangements[i] += i >= j ? arrangements[i - j] : 1;
    acc += diffs[i - j];
  }
}

console.log(arrangements.pop());
