import input from '../../input.js';

const values = input.match(/\d+/g).map(Number);

for (let i = 0; i < values.length; ++i) {
  const a = values[i];

  for (let j = i + 1; j < values.length; ++j) {
    const b = values[j];

    for (let k = j + 1; k < values.length; ++k) {
      const c = values[k];

      if (a + b + c === 2020) {
        console.log(a * b * c);
        process.exit();
      }
    }
  }
}
