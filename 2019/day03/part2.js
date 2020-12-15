import input from '../../shared/input.js';
import accumulate from '../../shared/accumulate.js';
import intersections from './intersections.js';

const wires = input.match(/.+/gm);
const closest = accumulate(
  Array.from(intersections(wires).values()), Infinity, min,
);

console.log(closest);

function min(acc, distance) {
  return Math.min(acc, distance);
}
