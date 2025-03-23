const sum = require('./sum');
const multiply = require('./multiply');

describe('Basic sum function tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -5 + 5 to equal 0', () => {
    expect(sum(-5, 5)).toBe(0);
  });

  test('adds 1.5 + 1.5 to equal 3', () => {
    expect(sum(1.5, 1.5)).toBe(3);
  });

  test('returns NaN when one argument is not a number', () => {
    expect(sum(1, 'a')).toBeNaN();
  });
});

describe('Basic multiply function tests', () => {
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies -2 * 5 to equal -10', () => {
    expect(multiply(-2, 5)).toBe(-10);
  });

  test('multiplies 0 * 99 to equal 0', () => {
    expect(multiply(0, 99)).toBe(0);
  });

  test('returns NaN when one argument is not a number', () => {
    expect(multiply(2, null)).toBeNaN();
  });
});
