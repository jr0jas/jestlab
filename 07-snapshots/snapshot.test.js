/**
 * ✅ HOW TO USE SNAPSHOTS IN JEST
 *
 * - Use `.toMatchSnapshot()` to compare serializable output
 * - Jest saves snapshots in __snapshots__ folder
 * - Update snapshots with `u` (interactive) or `--updateSnapshot`
 */

const {
    formatGreeting,
    getUserProfile,
    getUserOrders
  } = require('./formatter');

  //
  // 🔤 Basic Example: Strings
  //
  describe('📦 Snapshot - Basic Output', () => {
    test('formatGreeting should match snapshot', () => {
      const output = formatGreeting('Alice');
      expect(output).toMatchSnapshot(); // Saved as a string
    });
  });

  //
  // 📄 Intermediate Example: Flat Object
  //
  describe('📦 Snapshot - Object Output', () => {
    test('getUserProfile should match snapshot', () => {
      const user = getUserProfile(1);
      expect(user).toMatchSnapshot();
    });
  });

  //
  // 📚 Complex Example: Nested Orders
  //
  describe('📦 Snapshot - Nested Object Array', () => {
    test('getUserOrders should match snapshot', () => {
      const orders = getUserOrders(1);
      expect(orders).toMatchSnapshot();
    });
  });
