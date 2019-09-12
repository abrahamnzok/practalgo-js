const solution_2 = {};

/**
 * Given n, finds the next number in the fibonacci sequence
 * @param n An integer from 0 onwards
 * @returns {number|Node} the next number in the fibonacci sequence
 */
solution_2.fibonacci = n => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return this.fibonacci(n - 2) + this.fibonacci(n - 1);
  }
};

/**
 * Invoke this function to find the fibonacci sequence
 * @param n a number
 * @returns {*} the next number in the fibonacci sequence
 */
module.exports = n => solution_2.fibonacci(n);
