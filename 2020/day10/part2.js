import differences from './differences.js';
const arrangements = [];

for (const [i, difference] of differences.entries()) {
  let acc = difference;
  arrangements[i] = 0;

  for (let j = 0; i >= j && acc <= 3;) {
    ++j;
    arrangements[i] += i >= j ? arrangements[i - j] : 1;
    acc += differences[i - j];
  }
}

console.log(arrangements.pop());
