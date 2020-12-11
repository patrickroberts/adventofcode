import { readFileSync } from 'fs';

const values = readFileSync('input.txt', 'utf8').match(/\d+/g).map(Number);
const [depth] = process.argv.slice(2, 3).map(Number);

find(console.log);

function find(callback, remaining = depth, plus = 0, times = 1, index = 0) {
  if (remaining === 0) {
    const found = plus === 2020; 

    if (found) {
      callback(times);
    }

    return found;
  }

  for (let i = index; i < values.length; ++i) {
    if (find(callback, remaining - 1, plus + values[i], times * values[i], i + 1)) {
      return true;
    }
  }

  return false;
}
