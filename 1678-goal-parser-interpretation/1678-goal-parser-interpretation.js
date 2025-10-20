/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let temp = "";
    let arr = [];
    for (let i of command) {
        if (i == "(" || i == ")" || i == "a" || i == "l") {
            temp += i;
            if (temp == "()" || temp == "(al)") {
                arr.push(temp);
                temp = "";
            }
        } else arr.push(i);
    }

    arr.forEach(item => {
        if (item == "()") temp += "o";
        else if (item == "(al)") temp += "al";
        else temp += item;
    })

    return temp;
};