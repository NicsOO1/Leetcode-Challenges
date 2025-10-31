/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num = String(n);
    let product = 1;
    let sum = 0;

    for (let n of num) {
        product *= Number(n);
        sum += Number(n);
    }
    return (product - sum);
};