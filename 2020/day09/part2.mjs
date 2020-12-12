import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');
const xmas = input.match(/\d+/g).map(Number);
const preamble = xmas.slice(0, 25);

for (const value of xmas.slice(25)) {
  if (find(value)) {
    preamble.shift();
    preamble.push(value);
  } else {
    console.log(sequence(value));
    break;
  }
}

function find(sum, remaining = 2, acc = 0, index = 0) {
  if (remaining === 0) {
    return acc === sum;
  }

  for (let i = index; i < preamble.length; ++i) {
    if (find(sum, remaining - 1, acc + preamble[i], i + 1)) {
      return true;
    }
  }

  return false;
}

function sequence(sum) {
  for (let i = 0; i < xmas.length; ++i) {
    let acc = xmas[i];
    let j = i + 1;

    while (j < xmas.length && acc < sum) {
      acc += xmas[j++];
    }

    if (acc === sum) {
      const range = xmas.slice(i, j);
      return Math.min(...range) + Math.max(...range);
    }
  }
}
