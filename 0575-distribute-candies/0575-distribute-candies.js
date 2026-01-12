/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const limit = candyType.length / 2;
    const set = new Set()
    let types = 0;

    for (let c of candyType) {
        if (!set.has(c)) {
            set.add(c)
            types++;
        }
    }
    return (types < limit ? types : limit);

};