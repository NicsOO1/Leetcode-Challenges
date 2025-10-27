/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let f1 = 0;
    let f2 = 1;
    let f3;
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else {
        for (let i = 2; i <= n; i++) {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }
    }
    return f3;
}


