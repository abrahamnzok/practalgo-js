const solution_2 = {};

/**
 *
 * @param sequence The word to reverse
 * @returns {string} A new string but reversed
 */
const reversedWord = sequence => sequence.split('').reverse().join('');

/**
 *
 * @param sequence A String
 * @param reversedWord Function to reverse the @word
 * @returns {boolean} True if the first parameter is equal to its reversed instance
 */
solution_2.isPalindrome = (sequence, reversedWord) => sequence === reversedWord(sequence);

/**
 *
 * @param sequence The word or sequence to verify
 * @returns {*}
 */
module.exports = sequence => solution_2.isPalindrome(sequence, reversedWord);
