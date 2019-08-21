const utils = {};

/**
 * Creates an lowercase string
 * @param word A string
 * @returns {string}
 */
utils.setWordToLowerCase = (word) => word.toLowerCase();

/**
 * Creates an uppercase string
 * @param word
 * @returns {string}
 */
utils.setWordToUpperCase = (word) => word.toUpperCase();

module.exports = {...utils};
