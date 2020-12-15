import input from '../../shared/input.js';
import interpret from './interpret.js';

for (const match of input.matchAll(/nop|jmp/g)) {
  const modified = [
    input.slice(0, match.index),
    match[0] === 'nop' ? 'jmp' : 'nop',
    input.slice(match.index + match.length),
  ].join('');
  const instructions = modified.match(/.+/gm);
  const [pc, accumulator] = interpret(instructions);

  if (pc === instructions.length) {
    console.log(accumulator);
    break;
  }
}
