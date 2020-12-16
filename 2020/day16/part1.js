import input from '../../shared/input.js';

const [notes,, nearby] = input.split('\n\n');
const valid = new Set();

for (const [, min, max] of notes.matchAll(/(\d+)-(\d+)/g)) {
  for (let value = Number(min); value <= Number(max); ++value) {
    valid.add(value);
  }
}

let errorRate = 0;

for (const value of nearby.match(/\d+/g).map(Number)) {
  if (!valid.has(value)) {
    errorRate += value;
  }
}

console.log(errorRate);
