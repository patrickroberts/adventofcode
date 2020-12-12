import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');

let sum = 0;

for (const [group] of input.matchAll(/(?:\w+\n)+/g)) {
  sum += group.match(/\w+/g).reduce((everyone, person) => {
    return Array.prototype.filter.call(person, answer => {
      return everyone.includes(answer);
    });
  }).length;
}

console.log(sum);
