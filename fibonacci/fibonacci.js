/**
 * This object holds the different implementations of the fibonacci algorithm
 * The different implementations will be used a strategies
 */
const fibonacci = {
    1: require('./solution_1'),
    2: require('./solution_2'),
    // add yours here
};

/**
 * Invoke this function in order to test your algorithm
 * @param strategy the strategy to use
 * @param number the number for which we want to find the fibonacci sequence
 * @returns {*}
 */
module.exports = (strategy, number) => fibonacci[strategy](number);

