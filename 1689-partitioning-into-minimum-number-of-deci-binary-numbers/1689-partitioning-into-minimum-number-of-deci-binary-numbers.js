/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    const digits = [...String(n)].map(Number);
    const max = Math.max(...digits);
    const arr = [];

    for (let layer = 1; layer <= max; layer++) {
        let deciBinary = "";
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] >= layer) deciBinary += 1;
            else deciBinary += 0;
        }
        arr.push(deciBinary)
    }
    return arr.length;
};