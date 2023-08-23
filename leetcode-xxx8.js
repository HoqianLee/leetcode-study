/**
 * 
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
 * 
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 * 解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 
 */


// 第一版 暴力破解
// 用时：972ms
const twoSum = (numbers, target) => {
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];
    const s1 = target - el;
    for (let j = i + 1; j < numbers.length; j++) {
      if (s1 === numbers[j]) {
        index1 = i + 1;
        index2 = j + 1;
      }
    }
  }
  return [index1, index2];
};

// 第二版
// 用时 68ms
// 首尾相加等于目标值，返回
// 首尾相加小于目标值，首部+1
// 首尾相加大于目标值，尾部-1
const twoSum_2 = (numbers, target) => {
  let index1 = 0;
  let index2 = numbers.length - 1;
  while (index1 < index2) {
    if (numbers[index1] + numbers[index2] === target) {
      index1 += 1;
      index2 += 1;
      break;
    } else if (numbers[index1] + numbers[index2] < target) {
      index1++;
    } else {
      index2--;
    }
  }
  return [index1, index2];
};
