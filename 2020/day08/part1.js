import input from '../../input.js';
const instructions = input.match(/.+/gm);
const visited = new Set();

let pc = 0;
let accumulator = 0;

while (!visited.has(pc)) {
  visited.add(pc);

  const [, operator, argument] = instructions[pc].match(/(\w+) ([+-]\d+)/);

  switch (operator) {
    case 'acc':
      accumulator += Number(argument);
      break;
    case 'jmp':
      pc += Number(argument);
      continue;
  }

  ++pc;
}

console.log(accumulator);
