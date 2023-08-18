/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 第一版
const longestCommonPrefix = (strs) => {
  let firstStr = "";
  const min = Math.min(...strs.map((e) => e.length));
  dd: for (let i = 1; i <= min; i++) {
    const curFirstStr = strs[0].slice(i - 1, i);
    console.log("curFirstStr", curFirstStr);
    let has = true;
    for (let e = 1; e < strs.length; e++) {
      if (curFirstStr != strs[e].slice(i - 1, i)) {
        has = false;
        break dd;
      }
    }
    if (has) {
      firstStr += curFirstStr;
    }
  }
  return firstStr;
};
