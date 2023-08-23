const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  return nums.reduce((target, item, index) => {
    if (index % 2 === 0) {
      target += item;
    }
    return target;
  }, 0);
};
const list = [
  [1, 4, 3, 2],
  [6, 2, 6, 5, 1, 2],
  [6214, -2290, 2833, -7908],
];

list.forEach((item) => {
  console.log(arrayPairSum(item));
});
