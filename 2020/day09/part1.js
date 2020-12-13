import input from '../../input.js';
const xmas = input.match(/\d+/g).map(Number);
const preamble = xmas.splice(0, 25);

for (const value of xmas) {
  if (find(value)) {
    preamble.shift();
    preamble.push(value);
  } else {
    console.log(value);
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
