import input from '../../shared/input.js';

let sum = 0;

for (const [mass] of input.matchAll(/\d+/g)) {
  sum += fuel(mass);
}

console.log(sum);

function fuel(mass) {
  const result = Math.floor(mass / 3) - 2;

  return result + (result > 6 ? fuel(result) : 0);
}
