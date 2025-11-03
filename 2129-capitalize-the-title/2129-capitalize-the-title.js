/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const words = title.toLowerCase().split(" ");
    const res = words.map((word) => {
        if (word.length <= 2) return word + " ";
        else return word[0].toUpperCase() + word.slice(1, word.length) + " ";
    })
    return res.join("").trim();
};