import input from '../../input.js';
import invalid from './invalid.js';

const xmas = input.match(/\d+/g).map(Number);

console.log(sequence(invalid(xmas)));

function sequence(sum) {
  for (let i = 0; i < xmas.length; ++i) {
    let acc = xmas[i];
    let j = i + 1;

    while (j < xmas.length && acc < sum) {
      acc += xmas[j++];
    }

    if (acc === sum) {
      const range = xmas.slice(i, j);
      return Math.min(...range) + Math.max(...range);
    }
  }
}
