/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const obj = {};
    let majority = 0;
    let largest = 0;
    for (let num of nums) {
        if (!(num in obj)) obj[num] = 1;
        else obj[num] += 1;
    }

    for (const [key, val] of Object.entries(obj)) {
        if (val > largest) {
            largest = val;
            majority = key;
        }
    }

    return Number(majority);
};