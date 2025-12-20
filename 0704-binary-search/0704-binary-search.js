/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) {
        for (let i = left; i < mid; i++) {
            if (nums[i] === target) return i;
        }
    }
    else if (target > nums[mid]) {
        for (let i = right; i > mid; i--) {
            if (nums[i] === target) return i;
        }
    }
   return -1;
};