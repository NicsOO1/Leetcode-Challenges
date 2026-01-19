/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = 0;
    if (nums.length === 0) return init;
    nums.forEach((n, i) => {
        if (i === 0) val = fn(init, n);
        else val = fn(val, n);
    })

    return val;
};