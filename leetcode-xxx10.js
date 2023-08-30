/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 * 
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 */

// 第一版 暴力计算
// 用时： 6692ms
const minSubArrayLen = (target, nums) => {
  const len = nums.length;
  let minLenList = [];
  for (let slow = 0; slow < len; slow++) {
    const curNum = nums[slow];
    if (curNum >= target) {
      minLenList.push(1);
      continue;
    } else if (curNum < target) {
      let he = curNum;
      pdd: for (let fast = slow + 1; fast < len; fast++) {
        he += nums[fast];
        if (he >= target) {
          minLenList.push(fast - slow + 1);
          break pdd;
        }
      }
    }
  }
  if (minLenList.length) {
    minLenList.sort((a, b) => a - b);
    return minLenList[0];
  }
  return 0;
};

// 第二版
// 用时： 144ms
const minSubArrayLen_2 = (target, nums) => {
  let quick = 0 ;
  let slow = 0;
  let sum = 0;
  let len = nums.length;
  let ans = len;
  let hasTrue = false;
  for (quick = 0; quick < len; quick++) {
    sum += nums[quick];
    if (sum >= target) {
      console.log(123);
      while(1) {
        if (sum - nums[slow] >= target) {
          sum -= nums[slow++];
        } else {
          break;
        }
      }
      if (quick - slow + 1 <= ans) {
        ans = quick - slow + 1;
        hasTrue = true;
      }
    }
  }
  if (hasTrue) {
    return ans;
  }
  return 0;
};

const list = [
  [[10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8], 80],
  [[1, 2, 3, 4, 5], 11],
  [[2, 3, 1, 2, 4, 3], 7],
  [[1, 4, 4], 4],
  [[1, 1, 1, 1, 1, 1, 1, 1], 11],
];

list.forEach((item) => {
  console.log(minSubArrayLen(item[1], item[0]));
});
