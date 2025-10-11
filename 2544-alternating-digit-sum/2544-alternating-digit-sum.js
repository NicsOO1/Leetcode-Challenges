/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let exp = ``;
    const digits = String(n).split('');
    for (let i = 0; i < digits.length; i++) {
        if (i == 0 || i % 2 == 0) {
            exp += `(+${digits[i]})`
        }
        else exp += `(-${digits[i]})`
        if (i < digits.length - 1) exp += `+`
    }

    return eval(exp);
};