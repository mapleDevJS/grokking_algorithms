function factorial(number) {
    return number === 1 ? 1 : number * factorial(number - 1);
}

const number = 5;
console.log(`factorial of ${number} is ${factorial(number)}`);