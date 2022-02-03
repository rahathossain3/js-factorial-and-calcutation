//leap year function   .. but is not full correct
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 204;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is My Year Leap Year', isMyYearLeapYear);

const yourYour = 2224;
const isYourYearLeapYear = isLeapYear(yourYour);
console.log('Is your Year Leap Year', isYourYearLeapYear);


//leap year function   .. It is  full correct

// this is main leap year function

function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

var enterYear = 2100;
var isLeapYear = leapYear(enterYear);
console.log('This Year Is Leap Year:', isLeapYear);