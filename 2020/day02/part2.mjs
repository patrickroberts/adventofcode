import { readFileSync } from 'fs';

const lines = readFileSync('input.txt', 'utf8').matchAll(/^(\d+)-(\d+) (.): (.*)$/gm);

let valid = 0;

for (const [, pos1, pos2, letter, password] of lines) {
  if (Number(password[pos1 - 1] === letter) + Number(password[pos2 - 1] === letter) === 1) {
    ++valid;
  }
}

console.log(valid);
