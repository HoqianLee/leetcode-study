/**
 * 给你一个整数数组 nums ，请计算数组的 中心下标 。
 * 
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 
 * 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
 * 
 * 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 * 
 * url: https://leetcode.cn/leetbook/read/array-and-string/yf47s/
 * 
 * 输入：nums = [1, 7, 3, 6, 5, 6]
 * 输出：3
 * 中心下标是 3 。
 * 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
 * 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
 * 
 * 输入：nums = [1, 2, 3]
 * 输出：-1
 * 解释：
 * 数组中不存在满足此条件的中心下标。
 * 
 * 输入：nums = [2, 1, -1]
 * 输出：0
 * 解释：
 * 中心下标是 0 。
 * 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
 * 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
 */

// 第一版本
// 用时 500+ms 内存消耗 43.3MB
const pivotIndex = (nums) => {
    const sum = nums.reduce((total, item) => total + item, 0);
    const fixSum = (i) => nums.reduce((total, item, index) => {
        if (index < i) {
            return total + item;
        }
        return total;
    }, 0);
    let index = -1;
    hdd:for (let i = 0; i < nums.length; i++) {
        const average = (sum - nums[i]) / 2;
        if (Number.isInteger(average)) {
            const start = fixSum(i);
            if (start === average) {
                index = i;
                break hdd;
            }
        }
    }
    return index;
};

// 第二版
// 优化：数组求和
// 用时 230+ms 内存消耗 43MB
const pivotIndex_2 = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let index = -1;
    hdd:for (let i = 0; i < nums.length; i++) {
        const average = (sum - nums[i]) / 2;
        let start = 0;
        for (let e = 0; e < i; e++) {
            start += nums[e];
        }
        if (start === average) {
            index = i;
            break hdd;
        }
    }
    return index;
};

// 第三版
// 优化：左求和 * 2 + nums[i] = sum
// 用时 60+ms 内存消耗 43.3MB
const pivotIndex_3 = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let index = -1;
    let leftSum = 0;
    hdd:for (let i = 0; i < nums.length; i++) {
        if (2 * leftSum + nums[i] === sum) {
            index = i;
            break hdd;
        }
        leftSum += nums[i]
    }
    return index;
};


const list = [
    [1, 7, 3, 6, 5, 6],
    [1, 2, 3],
    [-1, -1, -1, 0, 1, 1],
    [2, 1, -1],
];

list.forEach((item) => {
    console.log(pivotIndex(item));
});