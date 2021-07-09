//Menu Chooser 1.0
// Allows user to select difficulty level
const readlineSync = require('readline-sync');
let again = "y";
while (again == "y") {
    console.log("Difficulty Levels\n");
    console.log("1 - Easy");
    console.log("2 - Normal");
    console.log("3 - Hard");
    const choice = parseInt(readlineSync.question("Enter your choice: "));

    switch (choice) {


        case 1:
            console.log("You chose easy!");
            break;
        case 2:
            console.log("You chose normal!");
            break;
        case 3:
            console.log("You chose hard!");
            break;

        default:
            console.log("Invalid Selection");

    }

    console.log("You played an exciting game");
    again = readlineSync.question("Would you like to play again(y/n)? ");
}

console.log("Okay, Bye!");
