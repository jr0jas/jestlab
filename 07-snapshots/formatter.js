// formatter.js

/**
 * Returns a formatted welcome message
 */
function formatGreeting(name) {
    return `Welcome, ${name.toUpperCase()}!`;
  }

  /**
   * Returns a user profile object
   */
  function getUserProfile(id) {
    return {
      id,
      username: `user_${id}`,
      isActive: true,
      roles: ['reader', 'writer'],
      joined: new Date('2023-01-01T10:00:00Z').toISOString()
    };
  }

  /**
   * Returns a list of user orders with nested structure
   */
  function getUserOrders(userId) {
    return {
      userId,
      orders: [
        {
          id: 101,
          date: '2023-09-01',
          total: 199.99,
          items: [
            { name: 'Keyboard', price: 99.99 },
            { name: 'Mouse', price: 100.00 }
          ]
        },
        {
          id: 102,
          date: '2023-09-15',
          total: 59.99,
          items: [
            { name: 'USB Cable', price: 19.99 },
            { name: 'Webcam', price: 40.00 }
          ]
        }
      ]
    };
  }

  module.exports = {
    formatGreeting,
    getUserProfile,
    getUserOrders
  };
