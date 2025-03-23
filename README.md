# 📦 JestLab

Welcome to **JestLab** — a hands-on learning repository for mastering unit testing in **Jest**, the delightful JavaScript testing framework by Facebook. This repo is structured to complement the [Test Automation University Jest Testing Tutorial](https://testautomationu.applitools.com/jest-testing-tutorial).

## 📚 Topics Covered

Each folder contains example code and tests for a specific Jest topic:

| Folder              | Topic                                          |
|---------------------|------------------------------------------------|
| `01-install/`       | Installing and configuring Jest               |
| `02-basic-test/`    | Writing your first test                       |
| `03-matchers/`      | Common and advanced matchers                  |
| `04-before-after/`  | Setup and teardown with `beforeEach`/`afterEach` |
| `05-specific-tests/`| Running specific or focused tests             |
| `06-async/`         | Asynchronous testing (Promises, async/await)  |
| `07-snapshots/`     | Snapshot testing (e.g. for React components)  |

## 🚀 Getting Started

1. Clone the repo:
   git clone https://github.com/jr0jas/jestlab.git  
   cd jestlab

2. Install dependencies:
   npm install

3. Run tests:
   npm test

To learn more about Jest and follow along with this tutorial, check out the official course:

🎓 [Jest Testing Tutorial @ Test Automation University](https://testautomationu.applitools.com/jest-testing-tutorial)

## 🧪 Example Test

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## 🛠 Tech Stack

- Jest
- Node.js
- JavaScript (ES6+)

## 📁 Folder Structure Preview

jestlab/  
├── 01-install/  
├── 02-basic-test/  
├── 03-matchers/  
├── 04-before-after/  
├── 05-specific-tests/  
├── 06-async/  
├── 07-snapshots/  
└── README.md

## 🧠 Reference

This repository is based on the course:  
**Test Automation University - Jest Testing Tutorial** by Angie Jones  
📘 https://testautomationu.applitools.com/jest-testing-tutorial

## 👨‍💻 About the Author

**Jorge Rojas** — Front-End Engineer & AEM Developer with over 12 years of experience in building high-quality web applications.

🔗 Connect with me on [LinkedIn](https://www.linkedin.com/in/jorgewebdev/)

## 📜 License

MIT License — feel free to fork and build on it.

---

Happy Testing! 🚀
```

Let me know if you’d like to include a short bio, profile pic badge, or link to your GitHub/portfolio as well!
