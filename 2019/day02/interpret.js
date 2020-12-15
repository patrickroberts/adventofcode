import intcode from '../shared/intcode.js';

export default (program, input) => {
  const modified = Array.from(program);
  const verb = input % 100;
  const noun = (input - verb) / 100;

  modified[1] = noun;
  modified[2] = verb;

  return intcode(modified, [input].values(), process.exit);
};
