/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    const countMap = new Map();
    let repeatedN = 0;
    let N = 0

    for (let n of nums) {
        if (countMap.has(n)) countMap.set(n, countMap.get(n) + 1);
        else countMap.set(n, 1);
    }

    for (let [key, value] of countMap) {
        if (value > repeatedN) {
            repeatedN = value;
            N = key;
        }

    }

    return N;
};