import input from '../../shared/input.js';

const symbol = new Map([['.', 0], ['#', 1]]);

export const region = dim(
  ...input.match(/.+/gm).map(
    (row) => dim(
      ...row.match(/./g).map(
        symbol.get, symbol,
      ),
    ),
  ),
);

export function dim(...array) {
  return new Map(array.entries());
}

export function popcount(tensor) {
  if (typeof tensor === 'number') return tensor;

  let sum = 0;

  for (const value of tensor.values()) {
    sum += popcount(value);
  }

  return sum;
}

export function hash(...values) {
  let key = 0;

  for (let i = 0; i < values.length; ++i) {
    key ^= values[i] << ((i * 8) % 32);
  }

  return key;
}

export function set(map, key, value = map.get(key) ?? new Map()) {
  map.set(key, value);
  return value;
}
