/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNoMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (romanNoMap.get(s[i + 1]) > romanNoMap.get(s[i])) {
            res += romanNoMap.get(s[i + 1]) - romanNoMap.get(s[i]);
            i += 1
        }
        else res += romanNoMap.get(s[i])
    }

    return res;
};