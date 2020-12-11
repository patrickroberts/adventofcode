import { readFileSync } from 'fs';

const lines = readFileSync('input.txt', 'utf8').matchAll(/^(\d+)-(\d+) (.): (.*)$/gm);

let valid = 0;

for (const [, min, max, letter, password] of lines) {
  const appearances = Array.prototype.reduce.call(
    password, (acc, value) => acc + Number(value === letter), 0,
  );

  if (appearances >= min && appearances <= max) {
    ++valid;
  }
}

console.log(valid);
