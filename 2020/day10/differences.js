import input from '../../input.js';
import accumulate from '../accumulate.js';
const adapters = Array.from(input.match(/\d+/g), Number).sort((a, b) => a - b);
const [differences] = accumulate(
  adapters, [[], 0], ([diffs, prev], curr) => [diffs.concat(curr - prev), curr], 
);

export default differences;
