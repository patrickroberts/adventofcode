import accumulate from '../accumulate.js';
import differences from './differences.js';
const count = (array, x) => accumulate(
  array, 0, (sum, y) => sum + Number(y === x),
);
const product = count(differences, 1) * (count(differences, 3) + 1);

console.log(product);
