const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    n = n.toString()
    console.log(n);
    let arr = []
    let max = 0
    for (let i = 0; i < n.length; i++) {

        arr.push(n.replace(n[i], ""))
        console.log(arr);

    }

    return Math.max(...arr);
}

module.exports = {
    deleteDigit
};