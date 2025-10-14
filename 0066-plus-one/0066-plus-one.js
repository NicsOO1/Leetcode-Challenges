/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const bigInt = String(BigInt(digits.join('')) + 1n);
    const newDigits = bigInt.toString().split('').map(Number);
    return newDigits;
};