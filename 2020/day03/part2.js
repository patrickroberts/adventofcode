import input from '../../input.js';
import accumulate from '../accumulate.js';
import trees from './trees.js';
const grid = input.split('\n');
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]

const product = accumulate(
  slopes, 1, (acc, [right, down]) => acc * trees(grid, right, down),
);

console.log(product);
