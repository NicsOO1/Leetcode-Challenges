/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    const map = new Map();
    const arr = [];
    let maxLength = 0;

    for (let c of s) {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
            arr.push(c);
            while (map.get(c) > 2) {
                map.set(arr[0], map.get(arr[0]) - 1)
                arr.shift();
            }
        }
        else {
            map.set(c, 1);
            arr.push(c)
        }

        if (arr.length > maxLength) maxLength = arr.length;

    }

    return maxLength
};