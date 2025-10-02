/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    const arr = s.split(' ');
    const newArr = []
    for (let i = 0; i < k; i++) {
        newArr.push(arr[i]);
    }   
    return newArr.join(' ');
};