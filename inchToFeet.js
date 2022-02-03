function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);          //coling funticn 
console.log('my Inches in Feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);          //coling funticn 
console.log('dadi Incahes to feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);          //coling funticn 
console.log(feet);

var nanaInches = 168;
var feet = nanaInches / 12;          //coling funticn 
console.log(feet);


// mile to Km
function mileToKilomiter(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilomiter(26.2);
console.log('Marathone in km: ', marathon);