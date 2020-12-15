import input from '../../shared/input.js';
import deltas from './deltas.js';

const [lower, upper] = input
  .match(/(\d+)-(\d+)/)
  .slice(1, 3)
  .map(Number);

let valid = 0;

for (let password = lower; password <= upper; ++password) {
  if (predicate(password)) {
    ++valid;
  }
}

console.log(valid);

function predicate(password) {
  let pair = false;
  let same = 1;

  return deltas(password).every(delta => {
    if (delta === 0) {
      ++same;
    } else {
      pair = pair || same === 2;
      same = 1;
    }

    return delta >= 0;
  }) && (pair || same === 2);
}
