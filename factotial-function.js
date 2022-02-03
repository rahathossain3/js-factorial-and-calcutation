// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

//using function for factorial

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;            // সর্বদা যে value এর মান রিটান করা হবে সেই value এর Name লিখতে হবে।
}

var firstFactorrial = getFactorial(7);
console.log('factorial of 7 is ', firstFactorrial);

var secondFactorial = getFactorial(9);
console.log('factorial of 9 is', secondFactorial);


//own try

function isFactorial(num) {
    var factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var factorialIs = isFactorial(6);
console.log('6 factorial is ', factorialIs);