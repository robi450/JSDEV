/*Lost Fortune 2.0
Defending the Fountain of Youth: Game Script
Roberto Torres- Class COP2801-JavaScript
Hi AT!!
I had so much fun creating this program! :-)
Thanks for showing us the way...
*/
const readlineSync = require('readline-sync');
let score = 0;
let lives = 3;
let lives_lost = 0;
let invaders_killed = 0;

let chief = "Chief Carlos";
let queen = "Queen Antonia";
let prince = "Prince Carlos II";
let war_chief = "Felipe";
let playAgain = "y";
while (playAgain == "y") {
    survivors = lives - lives_lost;
    console.log("Welcome to Defending the Fountain of Youth!");
    console.log("____________________________________________");
    console.log("A group of brave men and women from the Calusa Tribe fiercly defended their" +
        "\nFountain of Youth Treasure against foreign invasions." + "\nThis great lost treasure " +
        "is believed by many\nto possess super powers including eternal youth and the" +
        "\naquisition of great wealth and happiness." + "\nThe Tribe was led by " + chief + "," +
        " leader of the Calusa Tribe in the land mass north" + " of the Bahamas." +
        "\nAfter constant deadly attacks, the tribe decides to become more organized" +
        "\nand began to proactively prepare to meet the rude invaders at the coast.");
    console.log("Your mission is to assist the Calusas defend their land ");
    console.log("You have 4 choices to help them, " +
        "please choose wisely as some options will reduce your lives and cost " + "Calusa Lives");


    var leaderName = readlineSync.question("Enter your name: ");
    console.log("Hey there Chief " + leaderName + "!");
    console.log("These are your Choices, Choose Wisely...");
    console.log("1 - Map");
    console.log("2 - Chief Carlos canoe");
    console.log("3 - Run inland");
    console.log("4 - Try to make peace with the Conquistadors");

    const choice = parseInt(readlineSync.question("Enter your choice: "));

    switch (choice) {
        case 1:
            console.log("You chose a map that contains instructions and materials " +
                "to build a fortress for the Calusas. You Win!");
            score += 100;
            invaders_killed += 15;
            lives_lost = 0;
            console.log("\tStats\t");
            console.log("*******************");
            console.log("Invaders killed " + invaders_killed);
            console.log("Calusa lives lost " + lives_lost)
            console.log("Score: ", score);
            console.log("lives", lives);
            console.log("*******************");
            break;
        case 2:
            console.log("You chose Chief Carlos canoe and took over the invaders ship. " +
                "Flawless Win!");
            score += 100;
            invaders_killed += 15;
            lives_lost = 0;
            console.log("\tStats\t");
            console.log("*******************");
            console.log("Invaders killed " + invaders_killed);
            console.log("Calusa lives lost " + lives_lost);
            console.log("Score: ", score);
            console.log("lives ", lives);
            console.log("*******************");
            break;
        case 3:
            console.log("Oh no... the Calusas declared you an enemy. you lose...");
            lives = 0;;
            lives_lost += 1;
            console.log("\tStats\t");
            console.log("*******************");
            console.log("Invaders killed " + invaders_killed);
            console.log("Calusa lives lost " + lives_lost);
            console.log("Score: ", score);
            console.log("lives ", lives);
            console.log("*******************");
            break;
        case 4:
            console.log("Conquistadors refused to talk and took you hostage. Game Over...");
            lives = 0;
            lives_lost += 1;
            console.log("\tStats\t");
            console.log("*******************");
            console.log("Invaders killed " + invaders_killed);
            console.log("Calusa lives lost " + lives_lost);
            console.log("Score: ", score);
            console.log("lives ", lives);
            console.log("*******************");
            break;

        default:
            console.log("Invalid selection");


    }


    console.log("Thanks for playing Lost Fortune 2.0!");
    playAgain = readlineSync.question("Would you like to play again(y/n)? ");



}
console.log("Got it, Good Bye!");
