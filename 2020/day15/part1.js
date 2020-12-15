import input from '../../shared/input.js';

const numbers = input.match(/\d+/g).map(Number);

for (let index = numbers.length; index < 2020; ++index) {
  const lastIndex = numbers.lastIndexOf(numbers[index - 1], index - 2);
  numbers.push(lastIndex === -1 ? 0 : index - 1 - lastIndex);
}

console.log(numbers.slice(-1)[0]);
