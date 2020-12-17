import { region, dim, popcount, hash, set } from './conway.js';

let curr = dim(region);
let next = dim();
const done = new Map();

for (let c = 0; c < 6; ++c) {
  for (const [x, row] of curr) {
    for (const [y, col] of row) {
      for (const z of col.keys()) {
        kernel(x, y, z);
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

function kernel(x, y, z) {
  for (let i = -1; i <= 1; ++i) {
    for (let j = -1; j <= 1; ++j) {
      for (let k = -1; k <= 1; ++k) {
        state(x + i, y + j, z + k);
      }
    }
  }
}

function state(x, y, z) {
  const key = hash(x, y, z);

  if (done.has(key)) {
    return;
  }

  let value;
  let neighbors = 0;

  for (let i = -1; i <= 1; ++i) {
    for (let j = -1; j <= 1; ++j) {
      for (let k = -1; k <= 1; ++k) {
        if (i === 0 && j === 0 && k === 0) {
          value = curr.get(x)?.get(y)?.get(z) ?? 0;
        } else {
          neighbors += curr.get(x + i)?.get(y + j)?.get(z + k) ?? 0;
        }
      }
    }
  }

  if ((value && (neighbors === 2 || neighbors === 3)) || (!value && neighbors === 3)) {
    set(set(set(next, x), y), z, 1);
  }

  done.set(key, true);
}
