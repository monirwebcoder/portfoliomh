function sumArray(testOne) {
    let sum = 0;
    for (let i = 0; i < testOne.length; i++) {
        if (typeof testOne[i] === 'number') {
            sum += testOne[i];
        }
    }
    return sum;
}
let numbers = [2, 2, 3, 4, 10,11];
console.log(sumArray(numbers));

