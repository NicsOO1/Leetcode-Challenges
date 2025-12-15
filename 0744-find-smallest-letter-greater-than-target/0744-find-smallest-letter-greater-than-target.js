/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    const uniCodeOfA = 'a'.charCodeAt(0);
    const targetIndex = target.charCodeAt(0) - uniCodeOfA;
    for (let l of letters) {
        if ((l.charCodeAt(0) - uniCodeOfA) > targetIndex) return l;
    }

    return letters[0];
};