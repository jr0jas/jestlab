/**
 * ✅ HOW TO TEST ASYNC CODE IN JEST
 *
 * ✔ Return Promises directly to let Jest wait for them
 * ✔ Use async/await syntax for cleaner flow
 * ✔ Use `.resolves` and `.rejects` for fluent-style tests
 * ✔ Use `expect.assertions(n)` to ensure all async assertions ran
 */

const { fetchUserData, calculateTotalAsync } = require('./asyncUtils');

//
// 🧪 Basic Examples Using Promises
//
describe('🕒 Basic: Testing Promises with then() / catch()', () => {
  test('fetchUserData should return user for ID 1 (Promise)', () => {
    // ✅ Return a Promise so Jest waits
    return fetchUserData(1).then(data => {
      expect(data).toHaveProperty('name', 'Alice');
      expect(data.role).toBe('admin');
    });
  });

  test('fetchUserData should reject for unknown ID (Promise)', () => {
    // ✅ Catch the rejected Promise
    return fetchUserData(999).catch(err => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toMatch(/not found/);
    });
  });
});

//
// ⚡ Basic + Clean: Async/Await Syntax
//
describe('⚡ Basic: Using async/await', () => {
  test('calculateTotalAsync should return total for a cart', async () => {
    const cart = [
      { name: 'Phone', price: 300 },
      { name: 'Charger', price: 50 }
    ];
    const total = await calculateTotalAsync(cart);
    expect(total).toBe(350);
  });

  test('fetchUserData should resolve using resolves matcher', () => {
    // ✅ Cleaner than then(): resolves matcher
    return expect(fetchUserData(1)).resolves.toHaveProperty('role', 'admin');
  });

  test('fetchUserData should reject using rejects matcher', () => {
    // ✅ Cleaner than catch(): rejects matcher
    return expect(fetchUserData(2)).rejects.toThrow('User not found');
  });
});

//
// 🧠 Complex: Validating all assertions with expect.assertions()
// Useful when catching errors to ensure all checks run
//
describe('📣 Complex: Validating all assertions in async tests', () => {
  test('should throw and run both assertions in catch block', async () => {
    expect.assertions(2); // ✅ Ensures both below assertions run

    try {
      await fetchUserData(999); // This should fail
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('not found');
    }
  });
});

//
// 💡 BONUS: Mixing cart logic + async test
//
describe('🧾 Complex: Async cart test with multiple prices', () => {
  test('calculateTotalAsync handles large cart', async () => {
    const cart = [
      { name: 'Laptop', price: 999 },
      { name: 'Monitor', price: 250 },
      { name: 'Mouse', price: 49 },
      { name: 'Keyboard', price: 79 }
    ];

    const total = await calculateTotalAsync(cart);
    expect(total).toBe(1377);
    expect(typeof total).toBe('number');
  });
});
