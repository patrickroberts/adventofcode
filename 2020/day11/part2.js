import input from '../../shared/input.js';
import accumulate from '../../shared/accumulate.js';
import delta from './delta.js';

const survive = [0, 1, 2, 3, 4];
const born = [0];

let curr = input;

for (let next;; curr = next) {
  next = step(curr);
  if (next === curr) break;
}

const occupied = accumulate(curr, 0, (acc, value) => acc + Number(value === '#'));

console.log(occupied);

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
