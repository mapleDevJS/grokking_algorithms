function countdown(i) {
    console.log(i);

    if (i <= 0) {
        console.log('Base case');
        return; // Base case
    } else {
        console.log('Recursive case');
        countdown(i-1); // Recursive case
    }
}

countdown(10);
