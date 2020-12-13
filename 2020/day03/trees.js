export default (grid, right, down) => {
  const width = grid[0].length;
  let trees = 0;

  for (
    let y = down, x = right;
    y < grid.length;
    y += down, x += right
  ) {
    if (grid[y][x % width] === '#') {
      ++trees;
    }
  }

  return trees;
};
