/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    const arr = []
    for (let item of items) {
        const [type, color, name] = item;
        switch(ruleKey) {
            case "type":
                if (type === ruleValue) arr.push(item);
                break;
            case "color":
                if (color === ruleValue) arr.push(item);
                break;
            case "name":
                if (name === ruleValue) arr.push(item);
                break;
            default : return;
        }
    }

    return arr.length;
};