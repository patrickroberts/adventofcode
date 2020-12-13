import input from '../../input.js';
import accumulate from '../accumulate.js';

let valid = 0;

for (const [, min, max, letter, password] of input.matchAll(/^(\d+)-(\d+) (.): (.*)$/gm)) {
  const appearances = accumulate(
    password, 0, (acc, value) => acc + Number(value === letter),
  );

  if (appearances >= min && appearances <= max) {
    ++valid;
  }
}

console.log(valid);
