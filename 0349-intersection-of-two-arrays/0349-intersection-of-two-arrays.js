/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let smallArr;
    let largeArr;
    const intersectionArr = [];
    if (nums1.length < nums2.length) {
        smallArr = nums1;
        largeArr = nums2;
    }
    else {
        smallArr = nums2;
        largeArr = nums1;
    }


    for (let n of smallArr) {
        if (largeArr.includes(n)) {
            if (!intersectionArr.includes(n)) intersectionArr.push(n)
        }
    }

    return intersectionArr;
};