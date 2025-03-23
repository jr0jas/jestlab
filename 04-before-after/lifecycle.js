const {
    login,
    logout,
    addItem,
    clearCart,
    getCart,
    getTotal,
    applyDiscount,
    getUser
  } = require('./lifecycle');

  describe('🛒 E-commerce Cart Tests with Jest Lifecycle', () => {
    /**
     * beforeAll → Runs once before all tests in this block
     * Used here to simulate logging in the user session once
     */
    beforeAll(() => {
      login('test_user'); // Session setup
    });

    /**
     * afterAll → Runs once after all tests
     * Used here to simulate logging out the user session
     */
    afterAll(() => {
      logout(); // Session teardown
    });

    /**
     * beforeEach → Runs before each test
     * Used here to reset the cart and preload it with 1 item
     */
    beforeEach(() => {
      clearCart();
      addItem({ name: 'USB Cable', price: 10 });
    });

    /**
     * afterEach → Runs after each test
     * Used here to clear cart and prevent state leaks
     */
    afterEach(() => {
      clearCart();
    });

    test('User should be logged in', () => {
      const user = getUser();
      expect(user).toBeDefined();
      expect(user.name).toBe('test_user');
      expect(user.loggedIn).toBe(true);
    });

    test('Cart is preloaded with one item', () => {
      const cart = getCart();
      expect(cart).toHaveLength(1);
      expect(cart[0].name).toBe('USB Cable');
    });

    test('Add multiple items and check total', () => {
      addItem({ name: 'Keyboard', price: 30 });
      addItem({ name: 'Monitor', price: 150 });

      const cart = getCart();
      expect(cart).toHaveLength(3); // USB Cable + Keyboard + Monitor
      expect(getTotal()).toBe(190);
    });

    test('Apply 10% discount for total >= $100', () => {
      addItem({ name: 'Gaming Chair', price: 120 });

      const totalBeforeDiscount = getTotal();
      const discountedTotal = applyDiscount();

      expect(totalBeforeDiscount).toBe(130); // 10 + 120
      expect(discountedTotal).toBeCloseTo(117); // 10% off
    });

    test('No discount if total < $100', () => {
      addItem({ name: 'Mousepad', price: 5 });

      const totalBeforeDiscount = getTotal();
      const discountedTotal = applyDiscount();

      expect(totalBeforeDiscount).toBe(15); // 10 + 5
      expect(discountedTotal).toBe(15); // No discount applied
    });
  });
