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
  let same = false;

  return deltas(password).every(delta => {
    if (delta === 0) {
      same = true;
    }

    return delta >= 0;
  }) && same;
}
