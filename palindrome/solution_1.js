const solution_1 = {};

/**
 *
 * @param word The word to reverse
 * @returns {string} A new string but reversed
 */
const reversedWord = word => word === "" ? "" : reversedWord(word.substr(1)) + word.charAt(0);

/**
 *
 * @param word A String
 * @param reversedWord Function to reverse the @word
 * @returns {boolean} True if the first parameter is equal to its reversed instance
 */
solution_1.isPalindrome = (word, reversedWord) => word === reversedWord(word);

/**
 *
 * @param word The word or sequence to verify
 * @returns {boolean}
 */
module.exports = word => solution_1.isPalindrome(word, reversedWord);
