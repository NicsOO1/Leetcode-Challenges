/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();
    const arr = [];

    for (let n of nums1) {
        if (map1.has(n)) map1.set(n, map1.get(n) + 1)
        else map1.set(n, 1)
    }

    for (let n of nums2) {
        if (map2.has(n)) map2.set(n, map2.get(n) + 1)
        else map2.set(n, 1)
    }

    const minMap = map1.size < map2.size ? map1 : map2;
    const maxMap = map1.size > map2.size ? map1 : map2;

    for (let [key, value] of minMap) {
        if (maxMap.has(key)) {
            const count = Math.min(map1.get(key), map2.get(key));
            for (let i = 0; i < count; i++) {
                arr.push(key);
            }
        }
    }

    return arr;
};