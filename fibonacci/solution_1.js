const solution_1 = {};

/**
 *
 * @param n A integer from 0 onwards
 * @returns {number}
 */
solution_1.firstChild = n => (n <= 0 ? 0 : n === 1 ? 0 : n);

/**
 * Given n, finds the next number in the fibonacci sequence
 * @param n An integer from 0 onward
 * @returns {number|Node}
 */
solution_1.fibonacci = n =>
  this.firstChild(n) === 0 || this.firstChild(n) === 1
    ? this.firstChild(n)
    : this.fibonacci(n - 2) + this.fibonacci(n - 1);

/**
 *
 * @param n
 * @returns {*}
 */
module.exports = n => solution_1.fibonacci(n);
