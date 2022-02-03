//variable
var time = "4:20 PM";
var bookPrice = 150;
var isWhiteColor = false;

//array
var partners = ['saji', 'mijid', 'nojid', 'lajit'];
var elementcount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

//conditionnal

if (bookPrice < 120) {
    console.log('I will buy the book');
}
else {
    console.log('Mana, Kichu discount den na , apni na mama!');
}

//loop

var i = 0;
while (i <= 17) {
    //do some work
    i++
}

for (var i = 0; i <= 17; i++) {
    // any work
}

//function

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);      //calling function need for any result to give funtion


//let const

//value of variable could change
// var price = 27;
let price = 27;         //মান পরিবর্তিত হয়।
price = 29;
price = 31;

//value of the variable will not change
// var myName = 'lal e lal mr. Helal';
const myName = 'lal e lal mr. Helal';           // মান পরিবর্তিত হতে চায় না বা error দেয়।
console.log(myName)
// myName = 22;             //not correct Line for using const variable

