import input from '../../shared/input.js';
import intcode from '../shared/intcode.js';

const program = input.match(/[-\d]+/g).map(Number);

let diagnosticCode;

intcode(program, [1].values(), (value) => { diagnosticCode = value; });

console.log(diagnosticCode);
