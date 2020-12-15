import accumulate from '../../shared/accumulate.js';

const partition = (lower, upper) => ([min, max], half) => {
  const mid = (min + max) / 2;
  switch (half) {
    case lower: return [min, mid];
    case upper: return [mid, max];
  }
};

export default (pass) => {
  const [, row, col] = pass.match(/([BF]{7})([RL]{3})/);
  const [x] = accumulate(row, [0, 128], partition('F', 'B'));
  const [y] = accumulate(col, [0, 8], partition('L', 'R'));

  return x * 8 + y;
};
