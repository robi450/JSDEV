// Switch statements
const readlineSync = require('readline-sync');
/*var age = parseInt(readlineSync.question("Enter your age: "));

switch (age) {
    case 1:
        console.log("You can crawl");
        break;
    case 2:
        console.log("You can talk");
        break;
    case 3:
        console.log("You can jump");
        break;
    default:
        console.log("Wrong choice");
        break;

}*/
// Switch help avoid so many if statements. Takes one variable and test them for all the possible scenarios.

var boy = readlineSync.question("Enter the name of a family member or someone you desire: ");
switch (boy) {
    case "Javier":
        console.log("Que rico, he's the one that I want!!");
        break;
    case "Manny":
        console.log("He is my love, and I will always share with him");
        break;
    case "Stella":
        console.log("Esa es mi hermana");
        break;
    case "Santiago":
        console.log("Mi Padre");
        break;
    case "Ramonita":
        console.log("Mi amada Madre");
        break;
    default:
        console.log("Wrong choice");
    

}







