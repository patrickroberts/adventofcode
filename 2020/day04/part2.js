import input from '../../input.js';
const range = (val, min, max) => val >= min && val <= max;
const rules = new Map([
  ['byr', [/^\d{4}$/, ([byr]) => range(byr, 1920, 2002)]], 
  ['iyr', [/^\d{4}$/, ([iyr]) => range(iyr, 2010, 2020)]], 
  ['eyr', [/^\d{4}$/, ([eyr]) => range(eyr, 2020, 2030)]], 
  ['hgt', [/^(\d+)(cm|in)$/, ([, hgt, unit]) => unit === 'cm' ? range(hgt, 150, 193) : range(hgt, 59, 76)]], 
  ['hcl', [/^#[\da-f]{6}$/]],
  ['ecl', [/^(?:amb|blu|brn|gr[yn]|hzl|oth)$/]], 
  ['pid', [/^\d{9}$/]],
]);

let valid = 0;

for (const [passport] of input.matchAll(/(?:.+\n)+/g)) {
  if (validate(passport)) {
    ++valid;
  }
}

console.log(valid);

function validate(passport) {
  const entries = Array.from(passport.matchAll(/(\S+):(\S+)/g), match => match.slice(1, 3));
  const fields = new Map(entries);

  for (const [field, [rule, pred = () => true]] of rules) {
    if (!fields.has(field)) return false;
    const match = fields.get(field).match(rule);
    if (match === null || !pred(match)) return false;
  }

  return true;
}
