import input from '../../shared/input.js';
import accumulate from '../../shared/accumulate.js';
import intersections from './intersections.js';

const wires = input.match(/.+/gm);
const closest = accumulate(
  Array.from(intersections(wires).keys()), Infinity, min,
);

console.log(closest);

function min(acc, intersection) {
  const [x, y] = intersection.split(',');

  return Math.min(acc, Math.abs(x) + Math.abs(y));
}
