function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a * b;
  }
  module.exports = multiply;
