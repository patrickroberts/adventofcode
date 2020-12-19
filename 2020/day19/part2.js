import input from '../../shared/input.js';

const parts = input.split('\n\n');
const rules = new Map(
  Array.from(
    parts[0]
      .replace(/^8: 42$/m, '$& | 42 8')
      .replace(/^11: 42 31$/m, '$& | 42 11 31')
      .matchAll(/^(\d+): (.*)$/gm),
    (match) => [match[1], tokenize(match[2])],
  ),
);
const messages = parts[1].match(/.+/gm);
const cache = new Map();
const sum = messages.filter(test).length;

console.log(sum);

function tokenize(subRules) {
  return subRules
    .split(' | ')
    .map(subRule => subRule.split(' '));
}

function test(message) {
  const valid = or(message).some((index) => index === message.length);
  cache.delete(message);
  return valid;
}

function getOrAdd(map, key) {
  if (map.has(key)) {
    return map.get(key);
  }

  const value = new Map();
  map.set(key, value);
  return value;
}

function or(message, variants = rules.get('0'), indices = [0]) {
  return indices.flatMap((index) => {
    const map = getOrAdd(getOrAdd(cache, message), variants);

    if (map.has(index)) {
      return map.get(index);
    }

    const value = variants.flatMap((sequence) => and(message, sequence, [index]));
    map.set(index, value);
    return value;
  });
}

function and(message, sequence, indices) {
  return sequence.reduce((acc, token) => {
    if (rules.has(token)) {
      return or(message, rules.get(token), acc);
    }

    return acc.flatMap((index) => message.startsWith(
      token.match(/"(.)"/)[1],
      index,
    ) ? index + 1 : []);
  }, indices);
}
