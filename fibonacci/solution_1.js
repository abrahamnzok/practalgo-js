const solution_1 = {};

/**
 * Returns 0 if n is lower or equal to 0 or n is equal to 1 and n otherwise
 * @param n A integer from 0 onwards
 * @returns {number} the next number in the fibonacci sequence
 */
const firstChild = n => (n <= 0 ? 0 : n === 1 ? 0 : n);

/**
 * Given n, returns the next number in the fibonacci sequence
 * @param n An number from 0 onwards
 * @param firstChild
 * @returns {number|Node} a number
 */
solution_1.fibonacci = (n, firstChild) =>
    firstChild(n) === 0 || firstChild(n) === 1
        ? n
        : this.fibonacci(n - 2) + this.fibonacci(n - 1);

/**
 * Invoke this function to find the fibonacci sequence
 * @param n a number
 * @returns {*} the next number in the fibonacci sequence
 */
module.exports = n => solution_1.fibonacci(n,firstChild);
