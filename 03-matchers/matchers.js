function getProgrammingLanguages() {
    return ['JavaScript', 'Python', 'Java', 'Go'];
  }

  function getUserProfile() {
    return {
      id: 101,
      username: 'dev_coder',
      email: 'dev@example.com',
      roles: ['user', 'contributor'],
      active: true,
      stats: {
        followers: 120,
        contributions: 42
      }
    };
  }

  function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }

  function isAvailable(lang) {
    const available = ['JavaScript', 'Python', 'Java'];
    return available.includes(lang);
  }

  module.exports = {
    getProgrammingLanguages,
    getUserProfile,
    divide,
    isAvailable
  };
