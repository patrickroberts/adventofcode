export default (arrayLike, initialValue, op = (acc, value) => acc + value) => {
  return Array.prototype.reduce.call(arrayLike, op, initialValue);
};
