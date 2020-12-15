import input from '../../shared/input.js';
import interpret from './interpret.js';

const program = input.match(/\d+/g).map(Number);

console.log(interpret(program, 1202));
