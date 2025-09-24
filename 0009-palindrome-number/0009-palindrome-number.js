/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const result = String(x) === String(x).split('').reverse().join('') ? true : false;
    return result;
};