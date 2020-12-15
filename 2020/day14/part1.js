import input from '../../shared/input.js';
import accumulate from '../../shared/accumulate.js';

let set, clr;
const mem = new Map();

for (const [, dst, addr, val] of input.matchAll(/^(\w+)\[?(\d*)\]? = (\w+)$/gm)) {
  switch (dst) {
    case 'mask':
      set = BigInt(parseInt(val.replace(/X/g, 0), 2));
      clr = BigInt(parseInt(val.replace(/X/g, 1), 2));
      break;
    case 'mem':
      mem.set(addr, Number((BigInt(val) | set) & clr));
      break;
  }
}

console.log(accumulate(Array.from(mem.values()), 0));
