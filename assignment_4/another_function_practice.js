/*var a = "Global variable"
var f = function () {
    var b = "local variable";
    var N = function () {
        var c = "local variable to";
        return b;
    };
return N;
};
var inner = f();
console.log(typeof(inner));
console.log(inner);

// JavaScript Module System 
//*module.export = myModule*; 
//receiving script *var myModule = require('myModule')*
// then you have to declare it using an instance
// var myModuleInstance = new myModule();
//myModuleInstance.hello();
//myModuleInstance.goodbye();*/

/*var a = 1;
function f() {
    function n() {
        console.log(a);
    }
    var a = 2;
    n();
}
f()*/

//More practice of simple functions
//scope in JavaScript
//if a variable is declared outside it's a global variable, visible to any function.
// if declared inside of the function, it is only visible inside of the function
// we can declare functions, inside a function.
/*var a = "global variable";
var F = function () {
    var b = "local variable";
    var N = function () {
        var c = "inner variable";
        return b;
        };
    return N;
    };
console.log(typeof(F));
console.log(F(b));
// Modules */
// Modules */
// Modules */
//console.log("\tStats\t");


/*function square(number) {
    return number * number;
}
let number = square(4);
console.log(number);

function add(x,y) {
    return x + y;
}
let x = 4;
let y = 5;
console.log(x+y);*/

// Predefined functions
/* 
Eval - Evaluates a string and returns a value
ParseInt - Parses a string and returns an integer of the specified radix or base
ParseFloat - Parses a string and returns a floating point number.
Escape - REturns the haxadecimal encoding of an argument.
Unescape - Returns the ASCII string for the specified value.
*/
// Eval

let x = 2;
let y = 3;
let z = 4;
console.log(eval("x+y"));
console.log(eval(z));

//ParseInt
//let name1 = "1";
//console.log(parseInt(name1));

//Parse Float
console.log(parseFloat("3.14"));

// Create your own functions

// Different ways to define a function

// Function declaration
function isEven(num) {
    return num % 2 === 0;

}
console.log(isEven(12));
console.log(isEven(29));

// Another function declaration

function factorial(n) {
    if (n === 0) {
        return 1;  // Hoisting
    }
    return n * factorial(n - 1);

}
console.log(factorial(6));


//Function expression.
// This one is the work horse of JS

const count = function(array) {
    return array.length;
}
const methods = {
    numbers: [1,2,7],
    sum: function () {
        return this.numbers.reduce(function(acc, num) {
            return acc + num;
        });
    }
}
console.log(count([5, 7, 8, 11]));
console.log(methods.sum());

// Short Method Definition
const programming = {
    items : [],
    add(...items) {
        this.items.push(...items);
    },
    get(index) {
        return this.items[index];
    }
};
programming.add("Python", "JavaScript", "HTML", "C", "CSS", "Scratch");
console.log(programming.get(0));

// The arrow (=>) function.
// This function calculates the absolute value of any particular number.
const absValue = (number) => {
    if (number < 0) {
        return -number;
    }
    return number;
}
console.log(absValue(-17));
console.log(absValue(20));

// Generator Function. Returns a Generator Object.
function* indexGenerator(){ // for the Generator Function you always need the star symbol...
    var index = 0;
    while(true) {
        yield index++;
    }
}
const g = indexGenerator();
console.log(g.next().value);
console.log(g.next().value);


// Global and local variables
var novio = "Rolando Romero de Humacao"; // Global variable

function miPrimerAmor() {
    console.log("Mi Primer Amor fue: " + novio);
}
miPrimerAmor();
function year() {
    let year = "1996"
    console.log("Nos conocimos en el año " + year);
}
year();
function ages(){
    let ageRolando = 19;
    let ageRoberto = 16;
    return "Yo tenia " + ageRoberto + " y Rolando tenia " + ageRolando;
}
console.log(ages());

function bichoLindo () {
    var date = "Mike"; // Local variable
    console.log(date + " tenia una pinga linda y muy grande!");
}
bichoLindo();
console.log(bichoLindo); // this is outside, returns undefined.

// More functions, they are like mini programs and it can be called anytime you want.

function funky () {
    console.log("ouch!!!");
}
funky();

// Using parameters with functions
function meatball (x) {
    console.log("I Love " + x);
}
meatball("Pinga and Culo!!");
meatball("Ricky Martin");
meatball("Bad Bunny");

// Functions with multiple parameters.
function acerola (x, y) {
    console.log(x + " is better than " + y);

}
acerola("Acerola fruit", "Strawberries");
acerola("Banana", "Apple");
acerola("Mango", "Peach");

//The return statement
function tooeasy() {
    return "Sex Time!"

}
console.log(tooeasy());

function addNUmbers(a, b) {
    var c = a + b;
    return c;


}
console.log(addNUmbers(3,6));

// Calling functions from another function.
function doFirst () {
    console.log("I am here for you!");
}
function doSecond() {
    console.log("If you need me...");
}
function start() {
    doFirst();
    doSecond();
}
start();

// Math Operators
var apples = 19 % 2;
console.log(apples);

//Increment Operator
var chops = 7;
chops--;

console.log(chops);

// Assingment Operators
var roberto = 41;
roberto /= 2;

console.log("Age " + roberto);

// if statement = A simple way to make your computer make a simple decision.
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