import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').replace(/\n(?!\n)/g, ' ');
const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let valid = 0;

for (const [passport] of input.matchAll(/.+/gm)) {
  const fields = new Set(passport.match(/\w+(?=:)/g));

  if (required.every(fields.has, fields)) {
    ++valid;
  }
}

console.log(valid);
