import input from '../../input.js';

let sum = 0;

for (const [group] of input.matchAll(/(?:\w+\n)+/g)) {
  sum += group.match(/\w+/g).reduce(
    (everyone, person) => Array.prototype.filter.call(
      person, answer => everyone.includes(answer),
    ).join(''),
  ).length;
}

console.log(sum);
