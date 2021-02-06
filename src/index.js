
exports.min = function min (array) {
  return (array === undefined || array[0] === undefined ) ? 0 : array.sort((a,b) => a-b)[0];
}

exports.max = function max (array) {
  return (array === undefined || array[0] === undefined ) ? 0 : array.sort((a,b) => a-b)[array.length-1];
}

exports.avg = function avg (array) {
  return (array === undefined || array[0] === undefined ) ? 0 : (array.reduce((sum, current) => sum + current, 0))/array.length;
}