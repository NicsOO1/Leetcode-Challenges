/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const words = title.toLowerCase().split(" ");
    let str = "";
    for (let word of words) {
        if (word.length <= 2) str += word + " ";
        else str += word[0].toUpperCase() + word.slice(1, word.length) + " "
    }

    return str.trim();
};