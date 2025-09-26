/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let maxCount = 0;

    for (let i of s) {
        if (i == '(') {
            count++;
            maxCount = count > maxCount ? count : maxCount;
        }
        else if (i == ')') count--;
    }
    return maxCount;
};