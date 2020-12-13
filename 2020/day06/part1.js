import input from '../../input.js';

let sum = 0;

for (const [group] of input.matchAll(/(?:\w+\n)+/g)) {
  sum += new Set(group.replace(/\n/g, '')).size;
}

console.log(sum);
