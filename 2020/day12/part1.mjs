import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8');

let x = 0;
let y = 0;
let deg = 0;

for (const [, action, value] of input.matchAll(/(.)(\d+)/g)) {
  switch (action) {
    case 'N':
      y += Number(value);
      break;
    case 'S':
      y -= Number(value);
      break;
    case 'E':
      x += Number(value);
      break;
    case 'W':
      x -= Number(value);
      break;
    case 'L':
      deg += Number(value);
      break;
    case 'R':
      deg -= Number(value);
      break;
    case 'F':
      x += Number(value) * Math.round(Math.cos(deg / 180 * Math.PI));
      y += Number(value) * Math.round(Math.sin(deg / 180 * Math.PI));
      break;
  }
}

console.log(Math.abs(x) + Math.abs(y));
