// const number = 5;
// var remainder = number % 2;
// console.log(remainder == 0);
// console.log(nember % 2 == 0);


function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}


const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my nuber even :', isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number Even', isHerNumberEven);


// is odd function

function isOdd(number) {
    if (number % 2 != 0) {             // " number % 2 != 0 "     or  " number % 2 == 1 "
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);          // const variable = function_Name( value) ;
console.log("is My nume odd: ", isMyNumberOdd);         // console.log ( 'Is My number odd' , variable_name);

const isHerNumberOdd = isOdd(herNumber);
console.log('is her number odd:', isHerNumberOdd);



function oddOrEven(number1) {
    if (number1 % 2 == 0) {
        return true;
    }
    return false;
}
var numbers = 145;
var result = oddOrEven(numbers);
console.log(result);