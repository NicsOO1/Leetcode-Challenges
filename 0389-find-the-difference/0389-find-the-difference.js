/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let totalSum = 0;
    let sum = 0;
    for (let i = 0; i < t.length; i++) {
        totalSum += t.charCodeAt(i);
    }
    for (let i = 0; i < s.length; i++) {
        sum += s.charCodeAt(i);
    }
    let diff = totalSum - sum;
    return String.fromCharCode(diff);
};