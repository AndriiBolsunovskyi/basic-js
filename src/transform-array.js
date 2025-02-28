const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    throw new NotImplementedError('Not implemented');
    // if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    // if (arr.length == 0) { return arr }
    // let arrNew = [];
    // let j = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == "--discard-next" || typeof arr[i] !== 'number') {
    //         i++
    //     } else if (arr[i] == "--double-next") {
    //         arrNew.push(arr[i + 1]);
    //     } else if (arr[i] == "--discard-prev" && i > 0) {
    //         arrNew.pop();
    //     } else if (arr[i] == "--double-prev") {
    //         arrNew.push(arr[i - 1]);
    //     } else {
    //         arrNew.push(arr[i]);
    //     }
    // }

}
module.exports = {
    transform
};