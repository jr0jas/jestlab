const {
    getProgrammingLanguages,
    getUserProfile,
    divide,
    isAvailable
  } = require('./matchers');

  describe('✅ Common Matchers', () => {
    test('toBe for primitive values', () => {
      expect(5 + 5).toBe(10);
    });

    test('toEqual for objects', () => {
      expect({ framework: 'React' }).toEqual({ framework: 'React' });
    });

    test('toBeNull / toBeUndefined', () => {
      const x = null;
      let y;
      expect(x).toBeNull();
      expect(y).toBeUndefined();
    });

    test('toBeTruthy / toBeFalsy', () => {
      expect(1).toBeTruthy();
      expect(0).toBeFalsy();
    });

    test('not.toBe', () => {
      expect(1 + 2).not.toBe(5);
    });
  });

  describe('🔎 Expanded Matchers', () => {
    test('toContain in arrays', () => {
      const langs = getProgrammingLanguages();
      expect(langs).toContain('Python');
      expect(langs).not.toContain('Rust');
    });

    test('toMatch with strings and regex', () => {
      const email = getUserProfile().email;
      expect(email).toMatch(/@example\.com$/);
    });

    test('toHaveLength for strings and arrays', () => {
      expect('Jest').toHaveLength(4);
      expect(getProgrammingLanguages()).toHaveLength(4);
    });

    test('toBeGreaterThan / toBeLessThan', () => {
      const stats = getUserProfile().stats;
      expect(stats.followers).toBeGreaterThan(100);
      expect(stats.contributions).toBeLessThan(100);
    });

    test('toBeCloseTo (floating point rounding)', () => {
      expect(0.1 + 0.2).toBeCloseTo(0.3);
    });

    test('toHaveProperty', () => {
      const user = getUserProfile();
      expect(user).toHaveProperty('username', 'dev_coder');
      expect(user).toHaveProperty('stats.contributions', 42);
    });

    test('toThrow with error message', () => {
      expect(() => divide(10, 0)).toThrow();
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });

  describe('📦 Extra Matchers - Custom Examples', () => {
    test('isAvailable returns true for supported languages', () => {
      expect(isAvailable('Java')).toBe(true);
      expect(isAvailable('Rust')).toBe(false);
    });
  });
