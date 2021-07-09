// Roberto Torres SPC 2493256 JavaScript 2801

const readlineSync = require('readline-sync');
let leader_Backpack = require('./inventory');
let score = 0;
let lives = 3;
let lives_lost = 0;
let invaders_killed = 0;

let playAgain = "y";
while (playAgain == "y" && lives > 0) {
    const survivors = lives - lives_lost;
    console.log("Welcome to Defending the Fountain of Youth!");
    console.log("____________________________________________");
    function leaderName () {
        playerName = readlineSync.question("Enter your name: ");
        console.log("Hi there! " + playerName);
        console.log("Let's build a team for this game");
        console.log("Add two more members to your team to help you with this battle");
    }    
    leaderName();
    var fighters = ["Chief Carlos", "Queen Antonia", "Prince Carlos II", "War Chief Felipe"];
        for (var i = 0; i < 2; i++) {
            newTeamMembers = readlineSync.question("Enter fighter's name: ");
            fighters.push(newTeamMembers); 
        }
        console.log("Here is your New Team!:");
        console.log("________________");
        console.log(fighters);
        console.log("_________________");
    
    

    function displayIntro () {
        console.log("A group of brave men and women from the Calusa Tribe fiercly defended their" +
        "\nFountain of Youth Treasure against foreign invasions." + "\nThis great lost treasure " +
        "is believed by many\nto possess super powers including eternal youth and the" +
        "\naquisition of great wealth and happiness." + "\nThe Tribe was led by " + fighters[0] + 
        " leader of the Calusa Tribe in the land mass north" + " of the Bahamas." + 
        " Now with your help "  + playerName + " and the help of" + " " + fighters[1] + ", " 
        + fighters[2] + ", " + fighters[3] + ", " + fighters[4] + ", " + "and " + fighters[5] + " the Calusas will have" + 
        " more resources to defend their territory." +
        "\nAfter constant deadly attacks, the tribe decides to become more organized" +
        "\nand began to proactively prepare to meet the rude invaders at the coast.")  
        console.log("Your mission is to assist the Calusas in their quest to defend their land");
        console.log("**********************************")
        console.log("You have 4 choices to help them, " +
        "please choose wisely as some options will reduce your lives and cost Calusa Lives");
        console.log("___________________________________")
         
    }
    displayIntro();

    function displayMenu () {
        console.log("These are your Choices, Choose Wisely...");
        console.log("1 - Map");
        console.log("2 - Canoe");
        console.log("3 - Lance");
        console.log("4 - Spear");
        return displayMenu;
    }
    displayMenu();

    var playerHealth = 100;
    function doDamage(playerHealth) {
        playerHealth -= 25;
        if (playerHealth < 100) {
            lives -= 1;
            console.log(playerHealth)
            console.log(lives);
        }
        return playerHealth;
    }
    function displayStats() {
        console.log("\tStats\t");
        console.log("*******************");
        console.log("Player Health " + playerHealth);
        console.log("Invaders killed " + invaders_killed);
        console.log("Calusa lives lost " + lives_lost);
        console.log("Score: ", score);
        console.log("lives ", lives);
        console.log("*******************");
        return displayStats;

    }
    const choice = parseInt(readlineSync.question("Enter your choice: "));

    switch (choice) {
        case 1:
            console.log("You chose a map that contains instructions and materials " +
                "to build a fortress for the Calusas. You Win!");
            score += 100;
            invaders_killed += 15;
            lives_lost = 0;
            displayStats()
            leader_Backpack.addToInventory("Map");     
        break;

        case 2:
            console.log("You chose Chief Carlos canoe and took over the invaders ship. " +
                "Flawless Win!");
            score += 100;
            invaders_killed += 30;
            lives_lost = 0;
            displayStats()
            leader_Backpack.addToInventory("Canoe");   
        break;
        case 3:
            console.log("You chose Lance. Do you want to see what's in your backpack or pick up the Lance?: ");
            display_Backpack = 1;
            pickUpItem = 2;
            console.log("1: Display Backpack");
            console.log("2: Pick up item");
            choice_3 = parseInt(readlineSync.question("Enter your choice: "));
            if (choice_3 === 1) {
                console.log("Backpack inventory: ");
                leader_Backpack.displayBackpack();
            }
            if (choice_3 === 2) {
                leader_Backpack.addToInventory("Lance");
                
                console.log("Great choice, with this Lance you stopped the invasion. You win!");
            }
            invaders_killed += 5;
            score += 100;  
            console.log("Lives: " + lives);
            displayStats()   
        break;

        case 4:
            console.log("You chose the Spear...Do you want to see what's in your backpack or pick up the Spear?:");
            display_Backpack = 1;
            pickUpItem = 2;
            console.log("1: Display Backpack");
            console.log("2: Pick up item");
            choice_4 = parseInt(readlineSync.question("Enter your choice: "));
            if (choice_4 == 1) {
                console.log(leader_Backpack.displayBackpack());
            }
            if (choice_4 == 2) {
                playerHealth -= 25;
                leader_Backpack.addToInventory("Spear"); 
                doDamage(playerHealth);
                console.log("Sadly, you got shot and injured by an invader, the Spear was no help...You've just lost one life...");
            } 
            leader_Backpack.displayBackpack();
            lives_lost += 1;
            console.log("You must be healed and the Calusa's recently built a hospital but first you must" + 
            " pick your next action from the remaining menu options.");
            displayMenu();
            const choice = parseInt(readlineSync.question("Enter your choice: "));
            if (choice == 1) {
                score += 25;
                lives += 1;
                console.log("Perfect choice! You obtained the location and needed materials " +
                "to build a fortress for the Calusas. You Win!");        
            } else if (choice == 2) {
                score += 25;
                lives += 1;
                console.log("You chose Chief Carlos canoe and took over the invaders ship. " +
                "Flawless Win!");
            } else if (choice == 3) {
                score += 25;
                lives += 1;
                console.log("Great choice, with this Lance you stopped the invasion. You win!");

            } else {
                console.log("You chose 4 before, try another option");
                
            }
            break;

        default:
            console.log("Invalid selection");
    } 
        if (leader_Backpack.length >= 5) {
            var add_newItem = readlineSync.question("Your backpack is full. Would you like to trade for a new item? 'y' or 'n': ");
            if (add_newItem != "n") {
                let trade = readlineSync.question("Which item would you like to trade in?: ")
                leader_Backpack.pop(trade);
                console.log("Pick an item to add to your backpack:");
                console.log("1: Hatchet");
                console.log("2: Snake Venom");
                item_Choice = parseInt(readlineSync.question("Enter your choice: "));
                if (item_Choice === 1) {
                    leader_Backpack.addToInventory("Hatchet");
                }
                if (item_Choice === 2) {
                    leader_Backpack.addToInventory("Snake Venom");
                }
            else{
                console.log("Backpack is full... game over")
                break;
            }

        }
        
        console.log("Here's your new backpack");
        leader_Backpack.displayBackpack();

    }
    console.log("Thanks for playing Lost Fortune 4.0!");
    playAgain = readlineSync.question("Would you like to play again(y/n)? ");  
        
}
console.log("Good Bye!");






