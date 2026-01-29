/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const newArr = [];
    let chunk = [];
    for (let n of arr) {
        if (chunk.length === size) {
            newArr.push(chunk);
            chunk = [];
        }
        chunk.push(n)
    }
    if (chunk.length !== 0) newArr.push(chunk);
    return newArr
};
