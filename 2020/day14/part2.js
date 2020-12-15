import input from '../../shared/input.js';
import accumulate from '../../shared/accumulate.js';

let mask;
const mem = new Map();

for (const [, dst, addr, val] of input.matchAll(/^(\w+)\[?(\d*)\]? = (\w+)$/gm)) {
  switch (dst) {
    case 'mask':
      mask = val;
      break;
    case 'mem':
      apply(BigInt(addr), Number(val));
      break;
  }
}

console.log(accumulate(Array.from(mem.values()), 0));

function apply(address, value) {
  let width = 0;
  const result = mask.replace(/./g, (c, i) => {
    switch (c) {
      case '0': return (address >> BigInt(35 - i)) & 1n;
      case 'X': ++width;
      case '1': return c;
    }
  });
  const max = 1 << width;

  for (let bits = 0; bits < max; ++bits) {
    let bit = width;
    const actual = result.replace(/X/g, () => (bits >> --bit) & 1);
    mem.set(parseInt(actual, 2), value);
  }
}
