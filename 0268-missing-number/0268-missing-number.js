/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingValue = 0
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) missingValue = i;
    }
    return missingValue;
};