/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    for (let i of nums) {
        elementSum += i;
        let digit = String(i).split("");
        for (let d of digit) {
            digitSum += Number(d);
        }
    }
    return elementSum - digitSum;

};