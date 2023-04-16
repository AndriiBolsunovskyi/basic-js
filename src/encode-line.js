const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 1
    let result = ""

    for (let i = 0; i < str.length; i++) {
        // const element = array[i];
        if (str[i] == str[i + 1]) {
            count++
        } else {
            let number
            if (count == 1) {
                number = ""
            } else {
                number = count
            }
            result += number + str[i]
            count = 1
        }

    }
    return result
}

module.exports = {
    encodeLine
};