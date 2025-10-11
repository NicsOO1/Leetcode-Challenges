/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let sum = 0;
    const digits = String(n).split('');
    for (let i = 0; i < digits.length; i++) {
        if (i == 0 || i % 2 == 0) {
            sum += Number(digits[i]);
        }
        else sum -= Number(digits[i])
    }

    return sum;
};