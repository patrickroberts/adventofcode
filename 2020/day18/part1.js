import input from '../../shared/input.js';

let sum = 0;

for (const [line] of input.matchAll(/.+/gm)) {
  sum += evaluate(line.match(/[*+\d\(\)]/g));
}

console.log(sum);


function evaluate(tokens) {
  let lhs = operand(tokens);

  while (tokens.length > 0) {
    const op = tokens.shift();

    if (op === ')') return lhs;

    const rhs = operand(tokens);

    switch (op) {
      case '+': lhs += rhs; break;
      case '*': lhs *= rhs; break;
    }
  }

  return lhs;
}

function operand(tokens) {
  const token = tokens.shift();

  if (token === '(') return evaluate(tokens);
  return Number(token);
}
