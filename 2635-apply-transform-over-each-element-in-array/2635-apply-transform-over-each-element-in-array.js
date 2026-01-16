/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArr = [];
    const apply = (elem, i) => {
        let val = fn(elem, i);
        newArr.push(val)
    }
    arr.forEach(apply)

    return newArr;
};