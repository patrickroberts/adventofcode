import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const [survive, born] = process.argv[2].match(/\d+/g);

let curr = input;

for (let next;; curr = next) {
  next = step(curr);
  if (next === curr) break;
}

console.log(accumulate(curr, '#'));

function step(prev) {
  return prev.match(/[.L#]+/g).map((row, y, rows) => {
    const yMin = Math.max(y - 1, 0);
    const yMax = Math.min(y + 2, rows.length);

    return row.replace(/[.L#]/g, (col, x, cols) => {
      if (col === '.') return col;

      const xMin = Math.max(x - 1, 0)
      const xMax = Math.min(x + 2, cols.length);

      let occupied = 0;

      for (let j = yMin; j < yMax; ++j) {
        for (let i = xMin; i < xMax; ++i) {
          if (j === y && i === x) continue;
          if (rows[j][i] === '#') ++occupied;
        }
      }

      if (col === 'L' && born.includes(occupied)) return '#';
      if (col === '#' && survive.includes(occupied)) return '#';
      return 'L';
    });
  }).join('\n');
}

function accumulate(grid, value) {
  return Array.prototype.reduce.call(
    grid, (acc, val) => acc + Number(val === value), 0,
  );
}
