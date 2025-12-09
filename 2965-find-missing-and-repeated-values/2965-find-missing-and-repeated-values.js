/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const flatGrid = grid.flat().sort((a, b) => a - b);
    let arr = [];
    let repeatValue;
    let missingValue;


    for (let i = 0; i < flatGrid.length; i++) {
        if (arr.includes(flatGrid[i])) {
            repeatValue = flatGrid[i]
        } else {
            arr.push(flatGrid[i])
        }
    }

    for (let i = 1; i <= flatGrid.length; i++) {
        if (!(arr.includes(i))) {
            missingValue = i;
            arr = [repeatValue, missingValue]
            break;
        }
    }
    return arr;
};