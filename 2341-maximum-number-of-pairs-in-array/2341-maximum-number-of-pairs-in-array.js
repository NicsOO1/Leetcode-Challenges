/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const set = new Set();
    let pairCount = 0;
    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
            pairCount++;
        }
        else {
            set.add(num)
        }
    }

    return [pairCount, set.size]
};