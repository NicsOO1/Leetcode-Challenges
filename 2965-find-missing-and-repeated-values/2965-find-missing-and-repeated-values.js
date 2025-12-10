/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length * grid.length;
    let missing = -1;
    let repeat = -1;
    const seen = new Set();

    for (let row of grid) {
        for (let num of row) {
            if (seen.has(num)) repeat = num;
            seen.add(num)
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }

    }

    return [repeat, missing]
};