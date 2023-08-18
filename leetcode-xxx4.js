/**
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 */

const list = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [1, 2],
    [3, 4],
  ],
];

// 123456789
// 1234

// 第一版
const findDiagonalOrder = (mat) => {
  const list = [];
  const max = mat.length + mat[0].length - 2;
  const xMax = mat[0].length - 1;
  const yMax = mat.length - 1;
  let change = true;
  for (let e = 0; e <= max; e++) {
    for (let i = 0; i <= e; i++) {
      const x = change ? e - i : i;
      const y = e - x;
      if (x <= yMax && y <= xMax) {
        list.push(mat[x][y])
      }
    }
    change = !change;
  }
  return list;
};