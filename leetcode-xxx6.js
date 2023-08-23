/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 */

// 第一版
// 暴力
const longestPalindrome = (s) => {
  const strList = [];
  if (s.length === 1) {
    strList.push(s);
  } else {
    strList.push(s[0]);
    for (let i = 0; i < s.length; i++) {
      for (let j = s.length - 1; j > i; j--) {
        if (s[i] === s[j]) {
          let temp = true;
          for (let h = i, k = j; h < (j + i) / 2; h++, k--) {
            if (s[h] !== s[k]) {
              temp = false;
            }
          }
          if (temp) {
            strList.push(s.slice(i, j + 1));
          }
        }
      }
    }
  }
  strList.sort((a, b) => b.length - a.length);
  return strList[0];
};
