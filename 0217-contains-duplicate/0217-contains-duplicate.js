/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const arr = [];
    let isDuplicate = false;

    for (const num of nums) {
        for (const item of arr) {
            if (item === num) {
                isDuplicate = true;
                return isDuplicate;
            }
        }
        if (!isDuplicate) arr.push(num);
    }
    return isDuplicate;
};