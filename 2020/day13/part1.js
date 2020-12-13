import input from '../../input.js';

const [earliest, ids] = input.split('\n');

let minWaitTime = Infinity;
let earliestBus;

for (const [id] of ids.matchAll(/\d+/g)) {
  const waitTime = (id - (earliest % id)) % id;

  if (waitTime < minWaitTime) {
    minWaitTime = waitTime;
    earliestBus = id;
  }
}

console.log(earliestBus * minWaitTime);
