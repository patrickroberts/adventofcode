import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const [survive, born] = process.argv[2].match(/\d+/g);
const delta = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

let curr = input;

for (let next;; curr = next) {
  next = step(curr);
  if (next === curr) break;
}

console.log(accumulate(curr, '#'));

function step(prev) {
  return prev.match(/[.L#]+/g).map((row, y, rows) => {
    return row.replace(/[.L#]/g, (col, x, cols) => {
      if (col === '.') return col;

      let occupied = 0;

      for (const [dy, dx] of delta) {
        for (
          let j = y + dy, i = x + dx;
          j >= 0 && i >= 0 && j < rows.length && i < cols.length;
          j += dy, i += dx
        ) {
          const pos = rows[j][i];
          if (pos === '.') continue;
          occupied += Number(pos === '#');
          break;
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
