import input from '../../input.js';
import interpret from './interpret.js';

const instructions = input.match(/.+/gm);
const [, accumulator] = interpret(instructions);

console.log(accumulator);
