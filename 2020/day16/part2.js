import input from '../../shared/input.js';

const [notes, ticket, nearby] = input.split('\n\n');
const valid = new Set();
const entries = [];

for (const [, field, ranges] of notes.matchAll(/(.*): (.*)/g)) {
  const set = new Set();

  for (const [, min, max] of ranges.matchAll(/(\d+)-(\d+)/g)) {
    for (let value = Number(min); value <= Number(max); ++value) {
      valid.add(value);
      set.add(value);
    }
  }

  entries.push([field, set]);
}

const values = ticket.match(/\d+/g).map(Number);
const validTickets = nearby
  .match(/.+/gm)
  .slice(1)
  .map((nearbyTicket) => nearbyTicket.match(/\d+/g).map(Number))
  .filter((nearbyTicket) => nearbyTicket.every(valid.has, valid));
const fields = entries
  .map(([field, set]) => {
    const possible = new Set();

    for (let i = 0; i < validTickets[0].length; ++i) {
      if (validTickets.every((validTicket) => set.has(validTicket[i]))) {
        possible.add(values[i]);
      }
    }

    return [field, possible];
  })
  .sort(([, a], [, b]) => a.size - b.size);

let product = 1;

for (const [i, [field, [value]]] of fields.entries()) {
  if (field.startsWith('departure')) {
    product *= value;
  }

  for (let j = i + 1; j < fields.length; ++j) {
    fields[j][1].delete(value);
  }
}

console.log(product);
