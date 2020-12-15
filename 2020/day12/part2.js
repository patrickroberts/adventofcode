import input from '../../shared/input.js';

let x = 0;
let y = 0;
let dx = 10;
let dy = 1;

for (const [, action, value] of input.matchAll(/(.)(\d+)/g)) {
  switch (action) {
    case 'N':
      dy += +value;
      break;
    case 'S':
      dy -= Number(value);
      break;
    case 'E':
      dx += Number(value);
      break;
    case 'W':
      dx -= Number(value);
      break;
    case 'L': {
      const rx = Math.round(Math.cos(Number(value) / 180 * Math.PI));
      const ry = Math.round(Math.sin(Number(value) / 180 * Math.PI));
      [dx, dy] = [dx * rx - dy * ry, dx * ry + dy * rx];
      break;
    }
    case 'R': {
      const rx = Math.round(Math.cos(-Number(value) / 180 * Math.PI));
      const ry = Math.round(Math.sin(-Number(value) / 180 * Math.PI));
      [dx, dy] = [dx * rx - dy * ry, dx * ry + dy * rx];
      break;
    }
    case 'F':
      x += Number(value) * dx;
      y += Number(value) * dy;
      break;
  }
}

console.log(Math.abs(x) + Math.abs(y));
