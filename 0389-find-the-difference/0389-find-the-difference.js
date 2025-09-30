/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let totalSum = t.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    let sum = s.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    
    let diff = totalSum - sum;
    return String.fromCharCode(diff);
};