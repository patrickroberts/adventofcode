import input from '../../shared/input.js';
import invalid from './invalid.js';

const xmas = input.match(/\d+/g).map(Number);

console.log(invalid(xmas));
