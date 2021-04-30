const { printExecutionTime, printSeparator } = require('../utils');

function binarySearch(list, item) {
    // Get start time
    let start = process.hrtime();

    // low and high keep track of which part of the list you’ll search in.
    let low = 0;
    let high = list.length - 1;

    let count = 0;

    // While you haven’t narrowed it down to one element ...
    while (low <= high) {
        count++;
        console.log('\nstep #', count);

        // ... check the middle element.
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        console.log(...list.slice(low, high + 1));
        console.log('...check the middle element:', guess);

        // Found the item.
        if (guess === item) {
            console.log('Found the item');

            // Get stop time
            let stop = process.hrtime(start);
            // console.log(`time taken to execute: ${(stop[0] * 1e9 + stop[1]) * 1000/1e9} ms`);
            printExecutionTime(stop);

            return mid;
        }


        // The guess was too high.
        if (guess > item) {
            console.log('The guess was too high. ');

            high = mid - 1;
        // The guess was too low.
        } else {
            console.log('The guess was too low. ');

            low = mid + 1;
        }
    }

    // Get stop time
    let stop = process.hrtime(start);
    // console.log(`time taken to execute: ${(stop[0] * 1e9 + stop[1]) * 1000/1e9} ms`);
    printExecutionTime(stop);

    // The item doesn’t exist.
    return null;
}

// Let’s test it!
const myList = [1, 3, 5, 7, 9];
const myList2 = [1, 3, 5, 7, 9, 12, 13, 15];

console.log(`input: ${myList} number: 3`); // => 1 Remember, lists start at 0. The second slot has index 1.

console.log(`output: ${binarySearch(myList, 3)}`);
console.log('\nRemember, lists start at 0. The second slot has index 1.');
printSeparator();

console.log(`input: ${myList} number: -1`); // => null The value null represents the intentional absence of any object value in Javascript. It indicates that the item wasn’t found...
console.log(`output: ${binarySearch(myList, -1)}`);
console.log('\nThe value null represents the intentional absence of any object value in Javascript. \nIt indicates that the item wasn’t found...');
printSeparator();

console.log(`input: ${myList2} number: 12`); // => 5 
console.log(`output: ${binarySearch(myList2, 12)}`);

