/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 输入: nums = [0]
 * 输出: [0]
 */

// 第一版
const moveZeroes = (nums) => {
  if (nums.length >= 1) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[slow] = nums[i];
        if (slow != i) {
          nums[i] = 0;
        }
        slow++;
      }
    }
  }
  return nums;
};

const list = [[0, 1, 0, 3, 12], [0], [1, 2, 0, 1, 1, 0, 2, 3, 3, 4]];

list.forEach((item) => {
  console.log(moveZeroes(item));
});
