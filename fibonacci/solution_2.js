/**
 * Given n, finds the next number in the fibonacci sequence
 * @param n An integer from 0 onwards
 * @param {function} fibonacci
 * @returns {number|Node} the next number in the fibonacci sequence
 */
const fibonacci = (n, fibonacci) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2, fibonacci) + fibonacci(n - 1, fibonacci);
  }
};

/**
 * Invoke this function to find the fibonacci sequence
 * @param n a number
 * @returns {*} the next number in the fibonacci sequence
 */
module.exports = n => fibonacci(n, fibonacci);
