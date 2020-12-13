export default (instructions) => {
  const visited = new Set();

  let pc = 0;
  let accumulator = 0;

  while (!visited.has(pc) && pc >= 0 && pc < instructions.length) {
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

  return [pc, accumulator];
}
