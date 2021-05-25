/**
 * 
 * @param {*} array 
 * @returns 
 */
function quickSort(array) {
    if (array.length < 2) {
        return array; // Base case: arrays with 0 or 1 element are already “sorted.”
    } else {
        let pivot = array[0]; // Recursive case
        let less = array.slice(1).filter((item) => item <= pivot); // Sub-array of all the elements less than the pivot
        let greater = array.slice(1).filter((item) => item > pivot); // Sub-array of all the elements greater than the pivot

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
};

console.log(quickSort([10, 5, 2, 3])) // [2, 3, 5, 10]
