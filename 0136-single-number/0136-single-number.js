/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const countObj = {};
    for (let num of nums) {
        if (countObj[num] === undefined) countObj[num] = 1;
        else countObj[num]++;
    }
    for (let key in countObj) {
        if (countObj[key] == 1) return Number(key);
    }
};