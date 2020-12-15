export default (program, input, output) => {
  const memory = Array.from(program);

  for (let pc = 0;;) {
    const opcode = memory[pc];
  
    switch (opcode % 100) {
      case 1:
        const [a, b, c] = memory.slice(pc + 1, pc + 4);
        memory[c] = value(a, opcode / 100) + value(b, opcode / 1000);
        pc += 4;
        break;
      case 2:
        const [d, e, f] = memory.slice(pc + 1, pc + 4);
        memory[f] = value(d, opcode / 100) * value(e, opcode / 1000);
        pc += 4;
        break;
      case 3:
        const [g] = memory.slice(pc + 1, pc + 2);
        memory[g] = input.next().value;
        pc += 2;
        break;
      case 4:
        const [h] = memory.slice(pc + 1, pc + 2);
        output(value(h, opcode / 100));
        pc += 2;
        break;
      case 5:
        const [i, j] = memory.slice(pc + 1, pc + 3);
        if (value(i, opcode / 100)) {
          pc = value(j, opcode / 1000);
        } else {
          pc += 3;
        }
        break;
      case 6:
        const [l, m] = memory.slice(pc + 1, pc + 3);
        if (value(l, opcode / 100)) {
          pc += 3;
        } else {
          pc = value(m, opcode / 1000);
        }
        break;
      case 7:
        const [n, o, p] = memory.slice(pc + 1, pc + 4);
        memory[p] = Number(value(n, opcode / 100) < value(o, opcode / 1000));
        pc += 4;
        break;
      case 8:
        const [q, r, s] = memory.slice(pc + 1, pc + 4);
        memory[s] = Number(value(q, opcode / 100) === value(r, opcode / 1000));
        pc += 4;
        break;
      case 99:
        return memory[0];
    }
  }

  function value(parameter, mode) {
    return Math.floor(mode) % 10 ? parameter : memory[parameter];
  }
};
