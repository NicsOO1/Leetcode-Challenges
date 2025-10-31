/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    const commonValues = [];
    const set = new Set([...nums1])
    for (let item of nums2) {
        if (set.has(item)) commonValues.push(item)
    }
    if (commonValues.length > 0) return Math.min(...commonValues)
    else return -1;
};