import { region, dim, popcount, hash, set } from './conway.js';

let curr = dim(dim(region));
let next = dim();
const done = new Map();

for (let c = 0; c < 6; ++c) {
  for (const [x, vol] of curr) {
    for (const [y, row] of vol) {
      for (const [z, col] of row) {
        for (const w of col.keys()) {
          kernel(x, y, z, w);
        }
      }
    }
  }

  const swap = curr;

  curr = next;
  next = swap;
  next.clear();
  done.clear();
}

console.log(popcount(curr));

function kernel(x, y, z, w) {
  for (let i = -1; i <= 1; ++i) {
    for (let j = -1; j <= 1; ++j) {
      for (let k = -1; k <= 1; ++k) {
        for (let h = -1; h <= 1; ++h) {
          state(x + i, y + j, z + k, w + h);
        }
      }
    }
  }
}

function state(x, y, z, w) {
  const key = hash(x, y, z, w);

  if (done.has(key)) {
    return;
  }

  let value;
  let neighbors = 0;

  for (let i = -1; i <= 1; ++i) {
    for (let j = -1; j <= 1; ++j) {
      for (let k = -1; k <= 1; ++k) {
        for (let h = -1; h <= 1; ++h) {
          if (i === 0 && j === 0 && k === 0 && h === 0) {
            value = curr.get(x)?.get(y)?.get(z)?.get(w) ?? 0;
          } else {
            neighbors += curr.get(x + i)?.get(y + j)?.get(z + k)?.get(w + h) ?? 0;
          }
        }
      }
    }
  }

  if ((value && (neighbors === 2 || neighbors === 3)) || (!value && neighbors === 3)) {
    set(set(set(set(next, x), y), z), w, 1);
  }

  done.set(key, true);
}
