const solution_2 = {};

/**
 * Given n, finds the next number in the fibonacci sequence
 * @param n An integer from 0 onward
 * @returns {number|Node}
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
 *
 * @param n
 * @returns {number|*}
 */
module.exports = n => solution_2.fibonacci(n);
