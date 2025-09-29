/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let nSum = 0;
    let sum = nums.reduce((acc, curr) => { acc += curr; return acc; }, 0);
    for (let i = 0; i <= nums.length; i++) {
        nSum += i;
    }
    return nSum - sum;
};