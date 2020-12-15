import input from '../../shared/input.js';

const map = new Map();

let indices;

for (const [index, key] of input.match(/\d+/g).map(Number).entries()) {
  add(key, index);
}

let number;

for (let index = map.size; index < 30000000; ++index) {
  number = indices[1] - indices[0];
  add(number, index);
}

console.log(number);

function add(key, index) {
  if (map.has(key)) {
    indices = map.get(key);
    indices[0] = indices[1];
    indices[1] = index;
  } else {
    indices = [index, index];
    map.set(key, indices);
  }
}
