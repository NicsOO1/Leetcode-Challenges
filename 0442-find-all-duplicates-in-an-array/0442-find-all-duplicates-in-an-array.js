/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const seen = new Set();
    const duplicatesArr = [];
    for (let i of nums) {
        if (!seen.has(i)) seen.add(i);
        else duplicatesArr.push(i);
    }
    return duplicatesArr;
};