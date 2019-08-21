const solution_2 = {};

/**
 *
 * @param word The word to reverse
 * @returns {string} A new string but reversed
 */
const reversedWord = word => word.split('').reverse().join('');

/**
 *
 * @param word A String
 * @param reversedWord Function to reverse the @word
 * @returns {boolean} True if the first parameter is equal to its reversed instance
 */
solution_2.isPalindrome = (word, reversedWord) => word === reversedWord(word);

/**
 *
 * @param word The word or sequence to verify
 * @returns {*}
 */
module.exports = word => solution_2.isPalindrome(word, reversedWord);
