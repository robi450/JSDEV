//Functions practice
//Defining a function

function sum(a, b) {
    var c = a + b;
    return c;
}
//calling a function
var result = sum(2,3);
console.log(result)
result = sum(5,6);
console.log(result);

//Function that doesnt take any values
function sayHi() {
    console.log("Hi!");
}
var greeting = sayHi();
console.log(greeting)

var greeting = sum(1,2,3,4,5,6,7,8);
console.log(greeting);

// We can use the arguments array to make it more flexible
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];

    }
    return total;
}
var result = sum(1,2,3,4,5,6,7,8);
console.log(result)
// Predefined functions we can use.
var myNumbers = parseInt('123');
console.log(myNumbers);
var myNumbers = parseFloat('1.23')
console.log(myNumbers);

// Variable Scope in functions. In many cases a variable is only visible in a block of code.
// global variables are defined outside the function. We wanna minimize global variables or bindings. 
//Always declare variables using var.
var global = 1;
function f() {
    var local = 2;
    global++;
    return global
}
console.log(f(global));

var a = 123;
function f() {
    console.log(a);
    var a = 1;
    console.log(a);
}
console.log(f(a));

//Immediately Invoked Functions. Don't worry about it too much but it shows up in code. We also call it anonymous 
//function. Useful to return values as well. We'll use it later on.
function a() { console.log('Hi'); }
( function (name) {
    console.log('Hello ' + name + '!');
}
 ) ('Roberto');
//Nested functions. 
function outer(param) {
    function inner(theInput) { // this is how we make functions private
        return theInput *2;
    
    }
    return 'the result is ' + inner(param);


}
console.log(outer(2));

// We can return functions from functions
function b() {
    console.log('a');
    return function() {
        console.log('B');

    };

}
console.log(b);
var newFunc = b();
console.log(newFunc());

// Simple functions Code with Me!
// Odd / even numbers 
var number = 16;
console.log(isEven(number));
function isEven(n) {
    return n % 2 == 0;
}
console.log(isEven(number));

// Write a program that converts kilometers to miles. The conversion formula
//is as follows:
// Miles = Kilometers * 0.6214
/*var km = 100;
var result = toMiles(km);
console.log(result);
function toMiles(kilometers) {
    return kilometers * 0.6214;

}*/
/*const readlineSync = require('readline-sync');
var km = parseInt(readlineSync.question("Enter the kilometers to convert into miles: "))
var result = toMiles(km);
console.log(result);

function toMiles(kilometers) {
    return kilometers * 0.6214;
}*/

//Many financial experts advise that property owners should insure their homes
//or buildings for at least 80 percent of the amount it would cost to replace the structure.
//Write a program that displays the minimum amount of insurance he or she should buy for a building that cost 
// 5,200,000.
/*Breaking it down:
input:
    cost of building
processing: 
    .80 * cost
output:
    the minimun of insruance needed*/

var value = 5200000;
var insNeeded = calcInsNeeded(value);
console.log('The minimum insurance amount needed is: $' +  insNeeded.toFixed(2));
function calcInsNeeded(propValue) {
    return propValue * 0.8;
}
  
// Write a program that calcluates the total monthly cost of expenses for :
// Auto, loan payment, insurance, gas, oil, tires and maintenace
// Also display the annual.

var carPayment = 685.00;
var loanPayment = 585.00;
var insurance = 385.00
var gas = 45.00;
var oil = 28.00;
var tires = 20.00
var maintenance = 35.00

var myExpenses = [carPayment, loanPayment, insurance, gas, oil, tires, maintenance];
var totalMonthlyExpenses = calcTotalMonthlyCost(myExpenses);
console.log("Total Monthly expenses are $" + calcTotalMonthlyCost(myExpenses));
console.log("Total annual cost is $" + calcAnnualCost(totalMonthlyExpenses));
function calcTotalMonthlyCost(expenses){
    var total = 0.0;
    for (var i = 0; i < expenses.length; i++){
        total += expenses[i];


    }
    return total;


}
function calcAnnualCost(totalMonthly) {
    return totalMonthly * 12;
}

// Functions are data in JavaScript also
// Function literal notation
var f = function () {
    return 1;
};
console.log(f());
var express = function() {
// typeOf discovery
}
console.log(typeof(express));
function define(){
    return 2;
}
console.log(typeof(define));
const name1 = "Roberto"
console.log(typeof(name1));
const num = 10;
console.log(typeof(num));

// Functions that take any parameters.
var sum = function (a,b) {
    return a + b;
};
console.log(sum(4,6)); // Here is adding 
console.log(sum("Roberto ", "Josef")); // this is more like string concat due to the + sign

function invokeAdd(a,b) {
    return a() + b();
}
function one() {
    return 1;

}
function two() {
    return 2;
}
console.log(invokeAdd(one, two));
// Invoking anonymous functions

console.log(invokeAdd(function() {return 1; }, function() {return 2; }));
// This function takes three parameters and multiply them by 2;
function multiplyByTwo(a, b, c) {
    var i, myArray = [];
    for (i = 0; i < 3; i++) {
        myArray[i] = arguments[i] * 2;


    }
    return myArray;
}
console.log(multiplyByTwo(2,3,4));

function addOne(a) {
    return a + 1;
}
console.log(addOne(100));

var myArray_2 = [];
myArray_2 = multiplyByTwo(10, 20, 30);
console.log(myArray_2);
// To avoid so many loops 
for (var i = 0; i < 3; i++) {
    myArray_2[i] = addOne(myArray_2[i]);;
}
console.log(myArray_2);
/*function multiplyByTwo(a,b,c, callback) {
    var i, myArray = [];
    for (i = 0; i < 3; i++) {
        myArray[i] = callback(arguments[i] * 2);

    }
    return myArray;
} */
myArray_2 = multiplyByTwo(1,2,3, addOne);
console.log(myArray_2);
// anonymous function that takes 3 parameters and mulitply them by 2
console.log(multiplyByTwo(3,6,9, function(a) {return a + 2; }));

//sorting arrays
var data = [1,2,3,8,6,3,10,9]; // in here the sorting method makes a mistake by adding 10 in second position because 
//it reads it as a one.

// Here is a function to backsort or sort the array backwards
var backSort = function(a,b){
    return b - a;
}
data.sort(backSort);
console.log(data);
console.log(data.sort(function(a,b) { return b - a;}));


// Simple closures
var global = 1;
function outer () {
    var outer_local = 2;
    function inner () {
        var inner_local = 3;
        return inner_local + outer_local + global;
    }
    return inner();
}
console.log("Result " + outer());

var c = "Global variable";
var f = function (){
    var d = "local variable";
    var n = function() {
        var e = "local variable";
        return d;
    };
    return n;
    
};
console.log(f(d));







