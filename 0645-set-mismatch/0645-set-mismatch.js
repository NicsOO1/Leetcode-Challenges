/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set = new Set();
    let repeating = null;
    let missing = null;
    for (let n of nums) {
        if (set.has(n)) repeating = n;
        else set.add(n);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) missing = i;
    }

    return [repeating, missing];
};