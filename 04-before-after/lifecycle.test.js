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
    beforeAll(() => {
      // Simulate login once before all tests
      login('test_user');
    });

    afterAll(() => {
      // Simulate logout after all tests
      logout();
    });

    beforeEach(() => {
      // Preload cart with 1 item before each test
      clearCart();
      addItem({ name: 'USB Cable', price: 10 });
    });

    afterEach(() => {
      // Clear cart after each test
      clearCart();
    });

    test('User should be logged in', () => {
      const user = getUser();
      expect(user).toBeDefined();
      expect(user.name).toBe('test_user');
      expect(user.loggedIn).toBe(true);
    });

    test('Initial item in cart', () => {
      const cart = getCart();
      expect(cart).toHaveLength(1);
      expect(cart[0].name).toBe('USB Cable');
    });

    test('Add multiple items and check total', () => {
      addItem({ name: 'Keyboard', price: 30 });
      addItem({ name: 'Monitor', price: 150 });

      expect(getCart()).toHaveLength(3);
      expect(getTotal()).toBe(190);
    });

    test('Apply 10% discount for total >= $100', () => {
      addItem({ name: 'Gaming Chair', price: 120 });

      const discounted = applyDiscount();
      expect(getTotal()).toBe(130); // 10 + 120
      expect(discounted).toBeCloseTo(117); // 10% off
    });

    test('No discount if total < $100', () => {
      addItem({ name: 'Mousepad', price: 5 });
      const discounted = applyDiscount();
      expect(getTotal()).toBe(15); // 10 + 5
      expect(discounted).toBe(15);
    });
  });
