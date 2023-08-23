/**
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 * 
 * 输入：nums = [1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 * 
 * 输入：nums = [1,0,1,1,0,1]
 * 输出：2
 */

const findMaxConsecutiveOnes = (nums) => {
  const len = nums.length;
  let slow = 0;
  let maxSlow = 0;
  for (let fast = 0; fast < len; fast++) {
    if (nums[fast] == 1) {
      slow += 1;
    } else {
      slow = 0;
    }
    if (slow > maxSlow) {
      maxSlow = slow;
    }
  }
  return maxSlow;
};

const list = [
  [1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1],
];

list.forEach((item) => {
  console.log(findMaxConsecutiveOnes(item));
});
