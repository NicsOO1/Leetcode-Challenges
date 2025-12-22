/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    const sorted = prices.sort((a, b) => a - b);
    const total = sorted[0] + sorted[1];
    return (total > money ? money : money - total);
};