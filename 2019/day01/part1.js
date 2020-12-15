import input from '../../shared/input.js';

let sum = 0;

for (const [mass] of input.matchAll(/\d+/g)) {
  sum += Math.floor(mass / 3) - 2;
}

console.log(sum);
