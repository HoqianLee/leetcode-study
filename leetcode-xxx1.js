/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 *
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 *
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 */

// 如果数组中的值大于或者等于target，直接return
// 如果全部遍历完证明target是最大的数，直接插入末尾
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
  return nums.length;
};
