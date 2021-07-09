/*const square = function(x) {
    return x * x;
};
console.log(square(12));*/


const makeNoise = function() {
    console.log("Pling!");
};
makeNoise();



/*const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) { 
        result *= base;
    }
    return result;

};
console.log(power(2, 10));*/

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x + z);
//Each scope can "look out" into the scope around it, so x is visible inside the block 
//in the example. The exception is when multiple bindings have the same name-in that case, code can only
//see the innermost one. For example, when the code inside the halve function refers to n, is is seeing its own n, not the global n.

const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n);

//Nested Scope. Blocks and functions can be created inside other block and functions, producing multiple degrees 
//of locality. This is called Lexical Scoping.
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log('${ingredientAmount} ${unit} ${name}');
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, " teaspoon", "cumin");
};

/*Functions as Values
A function binding usually simply acts as a name for a specific piece of the program. Such binding is defined
once and never changed*/
/*let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() {"safeMode is on"};

    }*/
//shorter way to create a function binding
function square(x) {
    return x * x;
}
console.log(square(10));

console.log("The future says: ", future());

function future() {
    return "You'll never have flying cars";
}
//Functions declaration are not part of the top to bottom flow of control.
//Arrow functions =>

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));
//When theres only one parameter, the code can be simplified
const square1 = (x) => {return x * x; };
const square2 = x => x * x;
console.log(square1(10));
console.log(square2(5));
//When the arrow => function has no parameters, its parameter list is just an empty set of paranthesis
const horn = () => {
    console.log("Toot");
};
horn();
//The call stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Roberto, You are the best at this!!");
console.log("Keep Going, the Sky is the limit... I LOVE YOU!");

function square3(x) {return x * x; }
console.log(square(6, true, "hedgehog"));

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

function power2(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;

    }
    return result;
    
}
console.log(power2(4));
console.log(power2(2, 6));

//Closure: A function that references bindings from local scopes around it is called a closure.
//This helps make it possible to use function values in some creative ways.
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;

}
let twice = multiplier(3);
console.log(twice(5));
//Recursion = A function that calls itself. Ok as long as it doesn't do it so often.
// A function that calls itself its call recursive. Recursion allows some functions to be written in a 
//different style.
//Now this version is slower than the typical looping version. Running through a simple loop
//is usually cheaper than calling a function multiple times. Always keep a balance between speed and elegance.
function power3(base, exponent) {
    if (exponent == 0) {
        return 1;

    }else {
        return base * power3(base, exponent - 1);
    }
}
console.log(power3(2, 0));
//Here is a recursive solution;
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;

        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
            find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
//growing functions
//This program prints two numbers: the number of cows and the chickens in a farm, with 
//the words cows and chickens after them and zeros padded before both numbers, appearing three digits long*/
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString =String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

//Define a function to hols a value
const f = function(a) {
    console.log(a + 2);
};
f(10);

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}
console.log(g(15, 5));

let h = a => a % 3;
console.log(h(16));
//Understanding scopes in functions is KEY. Each block vreates a new scope
//Parameters and bindings declared in a given scope are local and not visible from the outside.
//Bindings declared with var behave differently-they end up in the nearest function scope or the global scope.