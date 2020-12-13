import input from '../../input.js';
const map = new Map();

for (const [, outer, inner] of input.matchAll(/(\w+ \w+) bags? contain (.+)/g)) {
  for (const [, bag] of inner.matchAll(/\d+ (\w+ \w+) bags?/g)) {
    map.set(bag, (map.get(bag) || new Set()).add(outer));
  }
}

const bags = new Set();
const queue = ['shiny gold'];

while (queue.length > 0) {
  for (const bag of map.get(queue.shift()) || new Set()) {
    bags.add(bag);
    queue.push(bag);
  }
}

console.log(bags.size);
