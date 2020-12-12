import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const partition = (lower, upper) => ([min, max], half) => {
  const mid = (min + max) / 2;
  switch (half) {
    case lower: return [min, mid];
    case upper: return [mid, max];
  }
};

let highest = 0;

for (const [, row, col] of input.matchAll(/([BF]{7})([RL]{3})/g)) {
  const [x] = Array.prototype.reduce.call(
    row, partition('F', 'B'), [0, 128],
  )
  const [y] = Array.prototype.reduce.call(
    col, partition('L', 'R'), [0, 8],
  );

  const id = x * 8 + y;

  highest = Math.max(highest, id);
}

console.log(highest);
