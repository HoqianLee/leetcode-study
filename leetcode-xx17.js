/**
 * 斐波那契数列
 */

// 暴力递归
console.log(Date.now());
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(41));
console.log(Date.now());

// 记忆化递归
console.log(Date.now());
const fibonacci1 = (n, db) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  if (db[n] >= 0) {
    return db[n];
  }
  db[n] = fibonacci1(n - 1, db) + fibonacci1(n - 2, db);

  return db[n];
};

const cache = {};
const fibonacci_memorized = (n) => {
  return fibonacci1(n, cache);
};
console.log(fibonacci_memorized(41));
console.log(Date.now());

// 记忆化递归2
console.log(Date.now());
const fibonacci2 = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  const db = {};
  db[0] = 0;
  db[1] = 1;
  db[2] = 1;
  for (let i = 3; i <= n; i++) {
    db[i] = db[i - 1] + db[i - 2];
  }
  return db[n];
};
console.log(fibonacci_memorized(41));
console.log(Date.now());

// 动态规划
console.log(Date.now());
const fibonacci3 = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1;
  let curr = 1;
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
console.log(fibonacci3(41));
console.log(Date.now());
