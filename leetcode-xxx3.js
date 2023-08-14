/**
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 */

// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 变换
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 变换
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

// 第一版
// 先找出需要清零的行和列，再去重清零 用时 65ms 内存 44MB
const setZeroes = (matrix) => {
  const h = [];
  const v = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let e = 0; e < matrix[i].length; e++) {
      const element = matrix[i][e];
      if (element === 0) {
        h.push(i);
        v.push(e);
      }
    }
  }
  const n_h = [...new Set(h)];
  const n_v = [...new Set(v)];
  for (let i = 0; i < n_h.length; i++) {
    matrix[n_h[i]] = new Array(matrix[n_h[i]].length).fill(0);
  }
  for (let i = 0; i < n_v.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][n_v[i]] = 0;
    }
  }
  return matrix;
};
