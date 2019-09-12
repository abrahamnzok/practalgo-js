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
 * @param {function} fibonacci
 * @returns {number|Node} a number
 */
const fibonacci = (n, firstChild, fibonacci) =>
    firstChild(n) === 0 || firstChild(n) === 1
        ? n
        : fibonacci(n - 2, firstChild, fibonacci) + fibonacci(n - 1, firstChild, fibonacci);

/**
 * Invoke this function to find the fibonacci sequence
 * @param n a number
 * @returns {*} the next number in the fibonacci sequence
 */
module.exports = n => fibonacci(n,firstChild, fibonacci);
