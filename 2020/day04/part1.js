import input from '../../input.js';
const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let valid = 0;

for (const [passport] of input.matchAll(/(?:.+\n)+/g)) {
  const fields = new Set(passport.match(/\S+(?=:)/g));

  if (required.every(fields.has, fields)) {
    ++valid;
  }
}

console.log(valid);
