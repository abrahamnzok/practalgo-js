/**
 * This module's utility is to add common/often used algorithms or which we'll be used across modules.
 */
const utils = {};

/**
 * Creates a lowercase string
 * @param word A string
 * @returns {string}
 */
utils.setWordToLowerCase = word => word.toLowerCase();

/**
 * Creates an uppercase string
 * @param word
 * @returns {string}
 */
utils.setWordToUpperCase = word => word.toUpperCase();

module.exports = {...utils};
