// asyncUtils.js

/**
 * Simulates a database/API request for user data
 * Returns a Promise that resolves if id === 1, or rejects otherwise
 */
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          resolve({ id: 1, name: 'Alice', role: 'admin' });
        } else {
          reject(new Error('User not found'));
        }
      }, 300);
    });
  }

  /**
   * Calculates the total price of a shopping cart asynchronously
   */
  async function calculateTotalAsync(cart) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return Promise.resolve(total);
  }

  module.exports = {
    fetchUserData,
    calculateTotalAsync
  };
