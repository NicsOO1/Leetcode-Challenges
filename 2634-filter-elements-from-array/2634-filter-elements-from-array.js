/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const newArr = [];
    function apply(elem, i) {
        if (fn(elem, i)) newArr.push(elem)

    }
    arr.forEach(apply)

    return newArr;
};