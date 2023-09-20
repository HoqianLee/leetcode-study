/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 *
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7]
 * 解释:
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 */

// 暴力破解 9416 ms
var maxSlidingWindow = function (nums, k) {
  const maxList = [];
  for (let index = 0; index < nums.length - k + 1; index++) {
    let max = nums[index];
    for (let j = index; j < index + k; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }
    maxList.push(max);
  }
  return maxList;
};
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1);

// 第二版本 2940 ms
var maxSlidingWindow = function(nums, k) {
  const maxList = [];
  let curMax = 0;
  let curMaxIndex = -1;
  for (let index = 0; index < nums.length - k + 1; index++) {
    let max = nums[index]
    if (curMaxIndex == -1) {
      for (let j = index; j < index + k; j++) {
        if (nums[j] > max) {
          max = nums[j];
          curMax = max;
          curMaxIndex = j;
        }
      }
    } else {
      if (curMaxIndex >= index) {
        if (nums[index + k - 1] > curMax) {
          max = nums[index + k - 1];
          curMax = max
          curMaxIndex = index + k - 1
        } else {
          max = curMax
        }
      } else {
        curMaxIndex = -1;
        for (let j = index; j < index + k; j++) {
          if (nums[j] > max) {
            max = nums[j];
            curMax = max;
            curMaxIndex = j;
          }
        }
      }
    }
    maxList.push(max)
  }
  return maxList;
};