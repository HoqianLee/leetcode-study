/**
 * 队列最大值
 */

var MaxQueue = function () {
  this.data = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.data.length == 0) {
    return -1;
  }
  return this.data.reduce((n1, n2) => (n1 > n2 ? n1 : n2));
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.data.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.data.length == 0) {
    return -1;
  }
  return this.data.shift();
};
