/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        let timer;
        const newPromise = new Promise((res, rej) => {
            timer = setTimeout(() => {
                rej("Time Limit Exceeded")
            }, t);
        });

        return Promise.race([fn(...args), newPromise]).then(res => res).finally(() => clearTimeout(timer));
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */