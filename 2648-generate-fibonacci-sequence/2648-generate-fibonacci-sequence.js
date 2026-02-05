/**
 * @return {Generator<number>}
 */
var fibGenerator = function* (callCount = Infinity) {
    let a = 0, b = 1;
    while (callCount-- > 0) {
        yield a;
        [a, b] = [b, a + b]
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */