/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0;
    for (let i = 2; i <= num; i++) {
        if (eval(i.toString().split('').join('+')) % 2 == 0) count++;
    }
    return count;
};