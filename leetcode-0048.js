/**
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
 * 不占用额外内存空间能否做到？
 *
 *
 */

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// 变换为
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]
// 变换为
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// 第一版 （实现为主）
// 暴力赋值 用时 64ms 内存 40.8MB
const rotate = (matrix) => {
  const len = matrix.length;
  const base = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < len; i++) {
    const element = base[i];
    for (let e = 0; e < len; e++) {
      matrix[e][len - 1 - i] = element[e];
    }
  }
};

// 第二版
// 先右上-左下翻转 再左右翻转 用时 60ms 内存 41MB
const rotate_2 = (matrix) => {
  const len = matrix.length;
  for (let e = 0; e < len; e++) {
    for (let i = e + 1; i < len; i++) {
      let cur = matrix[e][i];
      matrix[e][i] = matrix[i][e];
      matrix[i][e] = cur;
    }
  }
  for (let i = 0; i < len; i++) {
    for (let e = 0; e < len / 2; e++) {
      const temp = matrix[i][e];
      matrix[i][e] = matrix[i][matrix.length - 1 - e];
      matrix[i][matrix.length - 1 - e] = temp; 
    }
  }
};

// 第三版
// 先上下翻转 再右上-左下翻转 用时 56ms 内存 41MB
const rotate_3 = (matrix) => {
  for (let i = 0; i < matrix.length / 2; i++) {
    const temp = matrix[i];
    matrix[i] = matrix[matrix.length - 1 - i];
    matrix[matrix.length - 1 - i] = temp;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (j = i + 1; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
