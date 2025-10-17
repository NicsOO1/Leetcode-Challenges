/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const sortedNums = nums.sort((a, b) => a - b);
    for (let num of sortedNums) {
        if (num == original) original *= 2;
    }
    return original;
};