import input from '../../input.js';

for (const match of input.matchAll(/nop|jmp/g)) {
  const modified = [
    input.slice(0, match.index),
    match[0] === 'nop' ? 'jmp' : 'nop',
    input.slice(match.index + match.length),
  ].join('');
  const instructions = modified.match(/.+/gm);
  const visited = new Set();

  let pc = 0;
  let accumulator = 0;

  while (!visited.has(pc) && pc in instructions) {
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

  if (pc === instructions.length) {
    console.log(accumulator);
    break;
  }
}
