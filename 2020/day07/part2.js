import input from '../../shared/input.js';

const map = new Map();

for (const [, outer, inner] of input.matchAll(/(\w+ \w+) bags? contain (.+)/g)) {
  const bags = map.get(outer) || new Map();
  
  for (const [, count, bag] of inner.matchAll(/(\d+) (\w+ \w+) bags?/g)) {
    bags.set(bag, Number(count));
  }

  map.set(outer, bags);
}

console.log(contained('shiny gold'));

function contained(outer) {
  const entries = map.get(outer) || new Map();
  let sum = 0;

  for (const [inner, count] of entries) {
    sum += (1 + contained(inner)) * count;
  }

  return sum;
}
