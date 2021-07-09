//if else if else statements
// if statement = A simple way to make your computer make a simple decision.
const readlineSync = require('readline-sync');
var apples = 52;
var hotdogs = 53;

if (apples <= hotdogs) {
    console.log("Yay it worked");
}

var mangos = 10;
var bananas = 10;

if (mangos != bananas) {
    console.log("You have more bananas than mangos");
}
else {
    console.log("You have more mangos than bananas");
}

var blue = 5;
var red = 43;

if (blue>red){
    console.log("I love blueberries");
}
else {
    console.log("Don't come without one");

}
// Nesting if else if else statements
/*var firstName = readlineSync.question("Please enter your first name: ");
var lastName = readlineSync.question("Please enter your last name: ");

if (firstName=="Roberto") {
    if (lastName=="Torres") {
        console.log("Welcome " + firstName + " " + lastName + "!");
    }
    
}else {   
    console.log("Welcome " + firstName + " " + lastName + "!2");
}*/


// Complex Conditions. Easier way to test more than one condition

var first = "Roberto";
var last = "Torres";
// Here we use comparisson with && , both consdition must be true
if ( (first=="Roberto") && (last=="Torres") ) {
    console.log("Hey " + first + " " + last);
}
// Here with or comparisson either or can be true
var primero = "Javier";
var apellido = "Garcia";
if( (primero=="Javier") || (apellido=="Garcia")) {
    console.log("Hey "  + primero +  " " + apellido + "," + " Que rico estas! hmmm...");
}

