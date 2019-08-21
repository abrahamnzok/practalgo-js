const palindrome = {
    1: require('./solution_1'),
    2: require('./solution_2')
};

const {setWordToLowerCase} = require('../utils/utils');

/**
 *
 * @param strategy is an integer between 1 and 2.
 * @param word the word you want to check
 */
module.exports = (strategy, word) => palindrome[strategy](setWordToLowerCase(word));

