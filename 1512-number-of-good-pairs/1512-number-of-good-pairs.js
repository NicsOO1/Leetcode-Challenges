/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const freqMap = new Map();
    const seen = [];
    for (let n of nums) {
        if (freqMap.has(n)) {
            freqMap.set(n, freqMap.get(n) + 1);
            seen.push(freqMap.get(n));
        }
        else freqMap.set(n, 0)
    }
    return seen.reduce((sum, n) => sum += n, 0)
};