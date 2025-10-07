/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    for (let i of nums) {
        elementSum += i;
        digitSum += parseInt(eval(i.toString().split('').join('+')));
    }
    return elementSum - digitSum;

};