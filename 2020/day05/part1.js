import input from '../../input.js';
import seat from './seat.js';

let highest = 0;

for (const [pass] of input.matchAll(/.+/gm)) {
  highest = Math.max(highest, seat(pass));
}

console.log(highest);
