/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    function reducer(num) {
        return String(num)
            .split("")
            .reduce((sum, i) => (sum += Number(i)), 0);
    }

    if (String(num).length !== 1) {
        while (num >= 10) {
            num = reducer(num);
        }
        return num
    }
    return num
};