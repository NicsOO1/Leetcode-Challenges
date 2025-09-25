/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let largestLength = 0;
    for (let sentence of sentences) {
        let words = sentence.split(' ')
        if (words.length > largestLength) largestLength = words.length;
    }
    return largestLength;
};