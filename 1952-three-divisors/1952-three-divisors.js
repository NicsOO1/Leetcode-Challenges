/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    let isTrue = false;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }    
    }
    if (count === 3) isTrue = true;
    return isTrue;
};