/**
 * Sums values in array by loop "for"
 * @param {Array} arr Array of numbers
 * @return {number} Sum of the numbers
 */

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4]));
