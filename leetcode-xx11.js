/**
 * 杨辉三角
 */

const generate = (numRows) => {
  const fn = (list) => {
    const res = [1];
    for (let i = 0; i < list.length - 1; i++) {
      res.push(list[i] + list[i + 1]);
    }
    res.push(1);
    return res;
  };

  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  } else {
    let index = 3;
    let base = [[1], [1, 1]];
    while (index <= numRows) {
      base.push(fn(base[index - 2]));
      index++;
    }
    return base;
  }
};

const getRow = (numRows) => {
  const fn = (list) => {
    const res = [1];
    for (let i = 0; i < list.length - 1; i++) {
      res.push(list[i] + list[i + 1]);
    }
    res.push(1);
    return res;
  };

  if (numRows === 0) {
    return [1];
  } else if (numRows === 1) {
    return [1, 1];
  } else {
    let index = 2;
    let base = [[1], [1, 1]];
    while (index <= numRows) {
      base.push(fn(base[index - 1]));
      index++;
    }
    return base[base.length - 1];
  }
};

const list = [1, 2, 3, 4, 5, 6];

list.forEach((item) => {
  console.log(generate(item));
  console.log(getRow(item));
});
