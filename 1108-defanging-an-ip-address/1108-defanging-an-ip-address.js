/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let str = '';
   const arr = address.split('');
   for (let item of arr) {
    if (item != '.') str += item;
    else str += '[.]'
   }
   return str;
};