import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').replace(/\n(?!\n)/g, ' ');
const rules = new Map([
  ['byr', /^(?:19[2-9]\d|200[0-2])$/], 
  ['iyr', /^20(?:1\d|20)$/], 
  ['eyr', /^20(?:2\d|30)$/], 
  ['hgt', /^(?:1(?:[5-8]\d|9[0-3])cm|(?:59|6\d|7[0-6])in)$/], 
  ['hcl', /^#[\da-f]{6}$/], 
  ['ecl', /^(?:amb|blu|brn|gr[yn]|hzl|oth)$/], 
  ['pid', /^\d{9}$/],
]);

let valid = 0;

for (const [passport] of input.matchAll(/.+/gm)) {
  if (validate(passport)) {
    ++valid;
  }
}

console.log(valid);

function validate(passport) {
  const entries = Array.from(passport.matchAll(/(\S+):(\S+)/g));
  const fields = new Map(entries.map(([, field, value]) => [field, value]));

  for (const [field, rule] of rules) {
    if (!fields.has(field) || !rule.test(fields.get(field))) {
      return false;
    }
  }

  return true;
}
