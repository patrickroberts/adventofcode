import input from '../../shared/input.js';

const values = input.match(/\d+/g).map(Number);

for (let i = 0; i < values.length; ++i) {
  const a = values[i];

  for (let j = i + 1; j < values.length; ++j) {
    const b = values[j];

    if (a + b === 2020) {
      console.log(a * b);
      process.exit();
    }
  }
}
