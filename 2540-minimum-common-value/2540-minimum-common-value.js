/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    const commonValue = [];
    let isEmpty = true;

    const set = new Set([...nums1])
    for (let i = 0; i < nums2.length; i++) {
        if ((commonValue.length == 0) && set.has(nums2[i])) {
            commonValue.push(nums2[i]);
            isEmpty = false;
        }
        let prevValue = nums2[i - 1];
        if (nums2[i] < prevValue) {
            commonValue.pop();
            commonValue.push(nums2[i]);
            isEmpty = false;
        }

    }
    if(!isEmpty) return commonValue[0];
    else return -1;
};