/**
 * ✅ HOW TO RUN SPECIFIC TESTS IN JEST
 *
 * 1. Use `test.only()` or `describe.only()` to run just one test or suite:
 *    - test.only('runs this test', () => {...})
 *    - describe.only('runs only this group', () => {...})
 *
 * 2. Use `test.skip()` or `describe.skip()` to ignore tests temporarily:
 *    - test.skip('skip this test', () => {...})
 *    - describe.skip('skip this whole suite', () => {...})
 *
 * 3. Run just this test file from CLI:
 *    npx jest 05-specific-tests/specific.test.js
 *
 * 4. Run a specific test by name using `-t`:
 *    npx jest -t="divide"
 *
 * Useful when debugging or working on specific areas.
 */

const { add, multiply, divide, isEven } = require('./mathUtils');

describe('💡 Regular Math Utils Test Cases', () => {
  test('add(2, 3) should return 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('multiply(3, 4) should return 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});

describe('🔍 Debugging with test.only()', () => {
  test.only('divide(10, 2) should return 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('This will be skipped automatically if test.only is present', () => {
    expect(isEven(7)).toBe(false);
  });
});

describe('🚫 Skipping with test.skip()', () => {
  test.skip('skip divide by zero error test temporarily', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('isEven(4) should return true', () => {
    expect(isEven(4)).toBe(true);
  });
});

describe.skip('📦 Skipped Math Group', () => {
  test('multiply(0, 99) should return 0', () => {
    expect(multiply(0, 99)).toBe(0);
  });
});
