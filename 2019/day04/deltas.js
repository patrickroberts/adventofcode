export default (password) => [100000, 10000, 1000, 100, 10, 1]
  .map(digit(password))
  .reduce(
    (acc, value, index, digits) => {
      if (index > 0) {
        acc.push(value - digits[index - 1]);
      }

      return acc;
    },
    [],
  );

function digit(value) {
  return (place) => ((value % (10 * place)) - (value % place)) / place;
}
