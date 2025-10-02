/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toUpperCase() == word) return true;
    else if (word.toLowerCase() == word) return true;
    else if (word[0].toUpperCase() == word[0] && word.slice(1, word.length) == word.slice(1, word.length).toLowerCase()) return true;
    else return false;
};