module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0 ) return [];
  return matrix.reduce( (prev, item, index) => {
    if (index % 2 === 0) {
      return [...prev, ...item];
    }
    else {
      return [...prev, ...item.reverse()];
    }
  }, []);
}
