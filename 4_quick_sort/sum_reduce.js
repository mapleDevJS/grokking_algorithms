/**
 * Sums values in array by function "reduce"
 * @param {Array} arr Array of numbers
 * @return {number} Sum of the numbers
 */
 const sum = (arr) => arr.reduce((total, current) => total + current);

 console.log(sum([1, 2, 3, 4])); // 10
