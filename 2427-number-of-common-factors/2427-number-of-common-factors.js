/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    count = 0;
    const least = a < b ? a : b;
    for (let i = 1; i <= least; i++) {
        if (a % i == 0 && b % i == 0) count++;
    }
    return count;
};