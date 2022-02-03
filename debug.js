function getFactorial(number) {
    let factorial = 1;
    // console.log(number);
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
        // console.log(i, factorial);

    }
    return factorial;
}
const getMyFactorial = getFactorial(8);
// console.log(getMyFactorial);


for (let i = 0; i < 10; i++) {
    // console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}