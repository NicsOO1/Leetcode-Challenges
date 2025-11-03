/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const words = title.toLowerCase().split(" ");
    let res = [];
    for (let word of words) {
        if (word.length <= 2) res.push(word + " ");
        else res.push(word[0].toUpperCase() + word.slice(1, word.length) + " ");
    }

    return res.join("").trim();
};