import input from '../../shared/input.js';

const ids = input.split('\n')[1].split(',');
const entries = ids
  .map((id, index) => [Number(id), id - (index % id) % id])
  .filter(([id]) => !Number.isNaN(id));

let multiple = entries[0][0];
let timestamp = multiple;

for (let index = 1; index < entries.length; ++index) {
  const entry = entries[index];
  const id = entry[0];
  const offset = entry[1];

  while (timestamp % id !== offset) {
    timestamp += multiple;
  }

  let next = timestamp + multiple;

  while (next % id !== offset) {
    next += multiple;
  }

  multiple = next - timestamp;
}

console.log(timestamp);
