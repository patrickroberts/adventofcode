import input from '../../shared/input.js';
import interpret from './interpret.js';

const program = input.match(/\d+/g).map(Number);

for (let input = 0;; ++input) {
  if (interpret(program, input) === 19690720) {
    console.log(input);
    break;
  }
}
