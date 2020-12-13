import input from '../../input.js';

let valid = 0;

for (const [, pos1, pos2, letter, password] of input.matchAll(/^(\d+)-(\d+) (.):( .*)$/gm)) {
  const match1 = password[pos1] === letter;
  const match2 = password[pos2] === letter;

  if (Number(match1) + Number(match2) === 1) {
    ++valid;
  }
}

console.log(valid);
