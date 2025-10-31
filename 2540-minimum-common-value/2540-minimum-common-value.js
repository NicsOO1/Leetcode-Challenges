/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let commonValue = 0;
    const sortedArr = nums2.sort((a, b) => a - b)
    const set = new Set([...nums1])
    for (let item of sortedArr) {
    if (set.has(item))  commonValue = item
        break;
    }

    if(commonValue !== 0) return commonValue;
    else return -1;

};