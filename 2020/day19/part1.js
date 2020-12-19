import input from '../../shared/input.js';

const parts = input.split('\n\n');
const rules = new Map(
  Array.from(
    parts[0].matchAll(/^(\d+): (.*)$/gm),
    (match) => [match[1], tokenize(match[2])],
  )
);
const messages = parts[1].match(/.+/gm);
const valid = new RegExp(`^${regexp('0')}$`);
const sum = messages.filter(test).length;

console.log(sum);

function tokenize(subRules) {
  return subRules
    .split(' | ')
    .map(subRule => subRule.split(' '));
}

function test(message) {
  return valid.test(message);
}

function regexp(token) {
  return rules.has(token) ? or(rules.get(token)) : token.match(/"(.)"/)[1];
}

function or(variants) {
  return `(?:${variants.map(and).join('|')})`;
}

function and(sequence) {
  return `(?:${sequence.map(regexp).join('')})`;
}
