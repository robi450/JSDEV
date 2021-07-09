/*Lost Fortune 3.0
Defending the Fountain of Youth
Roberto Torres - COP2801 - JavaScript
*/
const readlineSync = require('readline-sync');
let score = 0;
let lives = 3;
let playerHealth = 100;
let lives_lost = 0;
let invaders_killed = 0;


let playAgain = "y";
while (playAgain == "y") {
    survivors = lives - lives_lost;
    console.log("Welcome to Defending the Fountain of Youth!");
    console.log("____________________________________________");
    var leaderName = readlineSync.question("Enter your name: ");
    console.log("Hi there " + leaderName);
    console.log("Let's build a team for this game");
    console.log("Let's add two more members to your team to help you with this battle");
    var fighters = ["Chief Carlos", "Queen Antonia", "Prince Carlos II", "War Chief Felipe"];
    for (var i = 0; i < 2; i++) {
    newTeamMembers = readlineSync.question("Enter fighter's name: ");
    fighters.push(newTeamMembers);  
    }  

    console.log("Here is your New Team!:");
    console.log("________________");
    console.log(fighters);
    console.log("_________________");
    console.log("Hey there Chief " + leaderName + "!");
    console.log("A group of brave men and women from the Calusa Tribe fiercly defended their" +
        "\nFountain of Youth Treasure against foreign invasions." + "\nThis great lost treasure " +
        "is believed by many\nto possess super powers including eternal youth and the" +
        "\naquisition of great wealth and happiness." + "\nThe Tribe was led by " + fighters[0] + 
        " leader of the Calusa Tribe in the land mass north" + " of the Bahamas." + 
        " Now with your help "  + leaderName + " and the help of" + " " + fighters[1] + ", " + fighters[2] + ", " + fighters[3] + ", " + fighters[4] + ", " + "and " + fighters[5] + " the Calusas will have" + 
        " more resources to defend their territory." +
        "\nAfter constant deadly attacks, the tribe decides to become more organized" +
        "\nand began to proactively prepare to meet the rude invaders at the coast.");

    console.log("Your mission is to assist the Calusas defend their land ");
    console.log("You have 4 choices to help them, " +
        "please choose wisely as some options will reduce your lives and cost Calusa Lives");
    
    let leader_Backpack = ["Bow and Arrow"];
    

    console.log("These are your Choices, Choose Wisely...");
    console.log("1 - Map");
    console.log("2 - Canoe");
    console.log("3 - Lance");
    console.log("4 - Spear");

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
            console.log("Calusa lives lost " + lives_lost);
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
            console.log("You chose Lance. Do you want to see what's in your backpack or pick up the Lance?: ");
            display_Backpack = "1";
            pickUpItem = "2"; 
            console.log("1: Display Backpack");
            console.log("2: Pick up item");

            choice_3 = readlineSync.question("Enter your choice: ");
            if (choice_3 === "1") {
                console.log("Backpack inventory: " + leader_Backpack);
            }
            
            if (choice_3 === "2") {
                leader_Backpack.push("Lance");
                console.log(leader_Backpack);
                console.log("Great choice, with this Lance you stopped the invasion. You win!");
            }
            score += 100;  
            lives = 0;
            lives += 1;
            console.log("\tStats\t");
            console.log("*******************");
            console.log("Invaders killed " + invaders_killed);
            console.log("Calusa lives lost " + lives_lost);
            console.log("Score: ", score);
            console.log("lives ", lives);
            console.log("*******************");
            break;
        case 4:
            console.log("You chose the Spear...Do you want to see what's in your backpack or pick up the Spear?:");
            display_Backpack = "1";
            pickUpItem = "2";
            console.log("1: Display Backpack");
            console.log("2: Pick up item");
            choice_4 = readlineSync.question("Enter your choice: ");
            if (choice_4 === "1") {
                console.log(leader_Backpack);
            }
            if (choice_4 === "2") {
                leader_Backpack.push("Spear"); 
                console.log("Sadly, you got shot by an invader and the Spear was no help...Game Over!");
            } 
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

    if (leader_Backpack > 5) {
        console.log("Let's check the contents of your back pack");
        console.log(leader_Backpack);
        add_newItem = readlineSync.question("Your backpack is full. Would you like to trade for a new item? 'y' or 'n': ");
        while (add_newItem !== "n") {
            trade = readlineSync.question("Which item would you like to trade in?: ")
            leader_Backpack.pop(trade);
            console.log("Pick an item to add to your backpack:");
            console.log("1: Hatchet");
            console.log("2: Snake Venom");
            item_Choice = readlineSync.question("Enter your choice: ");
            if (item_Choice === "1") {
                leader_Backpack.push("Hatchet");
            }
            if (item_Choice === "2") {
                leader_Backpack.push("Snake Venom");
            }


        }
        console.log("Here's your new backpack");
        console.log(leader_Backpack);

    }
    console.log("Thanks for playing Lost Fortune 3.0!");
    playAgain = readlineSync.question("Would you like to play again(y/n)? ");
    

        


    
    
        
   
        
}
console.log("Good Bye!");





