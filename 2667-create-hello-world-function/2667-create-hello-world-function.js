/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        // const arr = args
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */