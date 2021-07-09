/*Defending the Fountain of Youth: Game Script
Roberto Torres- Class COP2801-JavaScript*/

let score = 0;
let lives_lost = 0;
let lives = 4;
let chief = "Chief Carlos";
let queen = "Queen Antonia";
let prince = "Prince Carlos II";
let war_chief = "Felipe";
let invaders_leader = "Juan Ponce De León";
let invaders_killed = 0;
let survivors = (lives - lives_lost);

const INVADER_POINTS = 150;

console.log("Welcome to Defending the Fountain of Youth!");
console.log("____________________________________________");
console.log("A group of brave men and women from the Calusa Tribe fiercly defended their" +
    "\nFountain of Youth Treasure against foreign invasions." + "\nThis great lost treasure " +
    "is believed by many\nto possess super powers including eternal youth and the" +
    "\naquisition of great wealth and happiness." + "\nThe Tribe was led by " + chief + "," +
    " leader of the Calusa Tribe in the land mass north" + " of the Bahamas." +
    "\nAfter constant deadly attacks, the tribe decides to become more organized" +
    " \nand began to proactively prepare to meet the rude invaders at the coast." +
    "\nAll men and women fought bravely under " + chief + " command, \nthe conquistadors were defeated but at a great" +
    " cost to the Tribe..." + "\nOf the Tribe, " + lives_lost + " were vanished" + " " +
    "leaving just " + survivors + " Calusa warriors in the group...");

console.log("\tStats\t");
console.log("_______________");
console.log("Score: ", score);
console.log("Calusa Survivors: ", lives);
console.log("Invaders Killed", invaders_killed);




lives_lost += 1;
survivors = lives - lives_lost;
score += 100;
invaders_killed = 30;
score = invaders_killed * INVADER_POINTS;
lives -= 1;

console.log("\tStats\t");
console.log("________________");
console.log("Your Score is: ", score);
console.log("Calusa Survivors: ", lives);
console.log("Invaders Killed: ", invaders_killed);
console.log("Thankfully, " + chief + ", " + queen + " and " + prince +
    "\nwere able to survive such a barbaric attack! \nSadly, War Chief " + war_chief +
    " did not make it." + "\nHowever, he was able to injure " + invaders_leader + ", who is" +
    " \nin his way to Cuba to receive treatment...");
console.log("Thanks to your efforts, only " + lives_lost + " Calusa was killed, leaving " +
    survivors + " in the group. \nNow the Calusas will keep their sacred land!")
