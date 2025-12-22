/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    const str = String(n);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) sum += Number(str[i]);
        if (i % 2 == 1)sum -= Number(str[i]);
    }
    return sum;
};