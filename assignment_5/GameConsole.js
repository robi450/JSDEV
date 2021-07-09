//Roberto Torres SPCID-2493257
// JavaScript 2801
//GameConsole.js
const readlineSync = require('readline-sync');
const Game = require("./Game");


class GameConsole {
    constructor() {
    }
    load(name) {
        if (name == "Lost Fortune") {
            var gameName = new Game(name);
            gameName.play();
        }
        else{
            console.log("Sorry, that game is not available");
        }
    }
    turnOn() {
        console.log("Welcome to Lost Fortune!™️" + " ♛");
        var choice = parseInt(readlineSync.question("Press 1 to load, Press 2 to turn off: "));
        switch (choice) {
            case 1:
                var gameChoice = readlineSync.question("Enter the game's name: ");
                var start = new GameConsole();
                start.load(gameChoice);
            case 2:
                console.log("Goodbye");
            break;
        }   
    }
    start() {
        var email = readlineSync.question("Enter your email address: ");
        var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validEmail = emailFormat.exec(email);
        if (validEmail) {
            var card = readlineSync.question("Enter your credit card number :");
            var cardFormat = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
            var validCard = cardFormat.exec(card);
            if (validCard) {
                var menu = new GameConsole();
                menu.turnOn();
                
            }
            else {
                console.log("You have entered an invalid card number");
            var card = readlineSync.question("Enter your credit card number :");
            }
        }
        else {
            console.log("You have entered an invalid email!");
            var email = readlineSync.question("Enter your email address: ");
        }

    }
};

var startGame = new GameConsole();
startGame.start();

var startConsole = new GameConsole();
startConsole.turnOn();













