/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) reversed += word[i]
        if (word == reversed) return reversed;
    }
    return '';
};