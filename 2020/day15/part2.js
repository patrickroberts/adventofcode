import input from '../../shared/input.js';
import accumulate from '../../shared/accumulate.js';

let number;

const numbers = accumulate(
  input.match(/\d+/g).map(Number), new Map(), seed,
);

for (let index = numbers.size; index < 30000000; ++index) {
  number = add(numbers, index);
}

console.log(number);

function seed(map, value, index) {
  number = value;

  return map.set(value, [map.get(value)?.[1] ?? index, index]);
}

function add(map, index) {
  const indices = map.get(number);
  const apart = indices[1] - indices[0];

  map.set(apart, [map.get(apart)?.[1] ?? index, index]);

  return apart;
}
