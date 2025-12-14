/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    const bit = n.toString(2);

    for (let n of bit) {
        if (n === '1') count++;
    }
    return count;
};