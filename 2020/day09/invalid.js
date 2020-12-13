export default (xmas) => {
  const preamble = xmas.slice(0, 25);

  for (const value of xmas.slice(25)) {
    if (valid(preamble, value)) {
      preamble.shift();
      preamble.push(value);
    } else {
      return value;
    }
  }
}

function valid(preamble, value) {
  for (let i = 0; i < preamble.length; ++i) {
    const a = preamble[i];

    for (let j = i + 1; j < preamble.length; ++j) {
      const b = preamble[j];

      if (a + b === value) {
        return true;
      }
    }
  }

  return false;
}
