/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let n = 0;
    const arr = String(x).split('').map(Number);
    for (let i = 0; i <= arr.length - 1; i++) {
        n += arr[i];
    }
    if (x % n == 0) return n;
    else return -1;
};