/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    let char = '';
    let min = 1;
    for (let c of s) {
        if (map.has(c)) map.set(c, map.get(c) + 1);
        else map.set(c, 1);
    }

    for (let [key, value] of map) {
        if (value === min) {
            char = key;
            break;
        }
    }

    if (char !== "") return s.indexOf(char);
    else return -1;
};