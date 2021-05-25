const { printExecutionTime, printSeparator } = require('../utils');

// Selection Sort - O(n^2)

// Finds the smallest value in an array
const findSmallestIndex = (array) => {
    let smallestElement = array[0]; // Stores the smallest value
    let smallestIndex = 0; // Stores the index of the smallest value

    array.forEach((element, index) => {
        if (element < smallestElement) {
            smallestElement = array[index];
            smallestIndex = index;
        }
    })
  
    return smallestIndex;
  };
  
  // Sorts the array
  const selectionSort = (array) => {
    // Get start time
    const start = process.hrtime();

    const clonedArray = [...array];
    const sortedArray = [];
    const length = clonedArray.length;

    const result = array.reduce((sortedArray) => {
        console.count();
        const smallestIndex = findSmallestIndex(clonedArray); // Finds the smallest index of element in the array, and adds it to the new array
        sortedArray.push(clonedArray.splice(smallestIndex, 1)[0]);

        return sortedArray;
    }, [])


    // Get stop time
    const stop = process.hrtime(start);
    printExecutionTime(stop);

    return result;
  };
  

  const testArray = [5, 3, 6, 2, 10];

  console.log(`input: ${testArray}`);
  console.log(`output: ${selectionSort(testArray)}`); // [2, 3, 5, 6, 10]