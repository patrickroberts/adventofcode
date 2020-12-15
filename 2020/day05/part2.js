import input from '../../shared/input.js';
import seat from './seat.js';

const ids = new Set();

let lowest = 1024;
let highest = 0;

for (const [pass] of input.matchAll(/.+/gm)) {
  const id = seat(pass);

  ids.add(id);
  lowest = Math.min(lowest, id);
  highest = Math.max(highest, id);
}

for (let id = lowest + 1; id < highest; ++id) {
  if (!ids.has(id)) {
    console.log(id);
    break;
  }
}
