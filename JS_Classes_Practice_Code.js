//Classes 
// class declarations


/*// hoisting 
// calling a function before we write it
//catName("Chloe"); // hoisting only in functions
function catName(name) {
    console.log("My cats's name is " + name);
}
//catName("Tiger");
myName("Roberto");
function myName(name) {
    console.log("My name is " + name);
}
myGameConsole("Play");
function myGameConsole(message) {
    console.log("Press Play to Begin " + message);
}*/

// With classes, we need to declare your class first and the access it, otherwise code 
// will throw a reference error.
// A class expression is another way to define a class.
/*class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Rectangle.name);*/

//Unnamed
/*let Rectangle_2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle_2.name);

// Named
let Rectangle = class Rectangle_3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);*/

// Prototype methods
/*class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //getter
    get area() {
        return this.calcArea();
    }
    //method
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);
console.log(square.area);

// Generator methods

class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    //method
    *getSides() { // strict mode
        for(const side of this.sides) {
            yield side;
        }
    }
}
const pentagon = new Polygon(1,2,3,4,5);
console.log([...pentagon.getSides()]);*/

// static methods and properties
/*class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10 ,10);
p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(Point.displayName);
console.log(Point.distance(p1, p2));*/

//Binding this with prototype and static methods
/*class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let obj = new Animal();
obj.speak();
let speak = obj.speak;
speak();

Animal.eat()
let eat = Animal.eat;
eat();

// rewritting the above with traditional function based syntax in non-strict mode

/*function Animal() {}

Animal.prototype.speak = function() {
    return this;
}

Animal.eat = function() {
    return this;
}

let obj = new Animal();
let speak = obj.speak;
speak();

let eat = Animal.eat;
eat();*/

// Instance properties must be defined inside of class methods:
/*class Rectagnle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}*/

// Sub classing with extends - the extends keyword is used in class declaratios or class expressions
// to create a class as a child of another class.
/*class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}
let d = new Dog('Mitzie');
d.speak();*/

const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}
// If you don't do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak();

//Species
// To return Array objects in your derived array class MyArray. The species pattern lets you override default constructors.
class MyArray extends Array {
    // Overwirte species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);
console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);

// Classes and module exports
class Game{
    constructor(name){
        this.name = name;
    }
}
//GameConsole.js
const readlineSync = require('readline-sync');
const Game = require("./Game");

//var object = new Game();

//object.play();

class GameConsole {
    constructor() {
        //this.gameName = gameName;
    }
    load(name) {
        if (name == "Lost Fortune") {
            var object = new Game(name);
            object.play();
            /*
            var playLostFortune = new Game("Lost Fortune");
            return playLostFortune.play();
            */
        }
        else{
                console.log("Sorry, that game is not available");
            }
        }
    turnOn() {
        console.log("Welcome to Lost Fortune")
        var choice = readlineSync.question("Press 1 to load, Press 2 to turn off: ");
        switch (choice) {
            case "1":
                var gameChoice = readlineSync.question("Enter the game's name: ");
                //console.log(gameChoice);
                //gameChoice.load();
                var c = new GameConsole();
                c.load(gameChoice);
            case "2":
                console.log("Goodbye");
            break;
        }   
    }
};

var c = new GameConsole();
c.turnOn();
//var startGame = new GameConsole("choice");
//startGame.turnOn();








/*var hitesh = new User("hitesh", "hitesh@lco.dev");

console.log(hitesh.getInfo());
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

// Looping
let courses = hitesh.getCourseList();

courses.forEach(c => console.log(c));// output without array display*/


/*var hitesh = new User("hitesh", "hitesh@lco.dev");

console.log(hitesh.getInfo());
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

// Looping
let courses = hitesh.getCourseList();

courses.forEach(c => console.log(c));// output without array display*/