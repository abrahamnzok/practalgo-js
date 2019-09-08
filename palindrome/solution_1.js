const solution_1 = {};

/**
 * Reveres a string
 * @param sequence The word to reverse
 * @returns {string} A new string but reversed
 */
const reversedWord = sequence => sequence === "" ? "" : reversedWord(sequence.substr(1)) + sequence.charAt(0);

/**
 *
 * @param sequence A String
 * @param reversedWord Function to reverse the @word
 * @returns {boolean} True if the first parameter is equal to its reversed instance
 */
solution_1.isPalindrome = (sequence, reversedWord) => sequence === reversedWord(sequence);

/**
 *
 * @param sequence The word or sequence to verify
 * @returns {boolean}
 */
module.exports = sequence => solution_1.isPalindrome(sequence, reversedWord);
