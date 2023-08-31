/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */


const cuttingRope = (n) => {
  if (n < 2) return undefined;
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  } else if (n === 4) {
    return 4;
  } else {
    const i = Math.floor(n / 3);
    const re = n % 3;
    if (re === 1) {
      return 3 ** (i - 1) * 4;
    } else if (re === 2) {
      return 3 ** i * 2;
    } else {
      return 3 ** i;
    }
  }
};

const list = [6];

list.forEach((item) => {
  console.log(cuttingRope(item));
});
