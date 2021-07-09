/*Module 2 Code with me practice*/

const readlineSync = require('readline-sync');
/*var myArray = ["Juan", "Stella", "Gabriel", "Valentina"];
console.log(myArray);
let num = 10;
console.log(num);
console.log(myArray.length);

console.log(myArray[0])
console.log(myArray[3]);
console.log(myArray.length);
delete myArray[3];
console.log(myArray);
myArray.push("Valentina");
console.log(myArray);
myArray.pop[3];
console.log(myArray);
console.log(myArray);

var a = [1, "true", false, null, undefined];
a[3] = [4, 5, 6]
console.log(a)*/
/*var months = ["Jan", "Feb", "March"];
console.log(months.indexOf("Jan"));
months.push("April", "May", "June");
console.log(months);
months.push("Jul");
console.log(months.indexOf("Jul"));
delete months[6];
console.log(months);
months[6] = "July";
console.log(months);
months.pop();
console.log(months);
months.push("July", "August", "September", "October", "November", "December");
console.log(months);
months.unshift("December");
console.log(months);
months_2 = ["enero", "febrero", "marzo"];
months.concat(months_2);
all = months.concat(months_2);
console.log(all);
all.splice(0,1);
console.log(all);
all.slice(2,4);
console.log(all);
console.log(months);*/

//Store user input in the array//
/*var monday = 10000.00;
var tuesday = 35000.35;
var wednesday = 2500.00;
var thursday = 56000.00;
var friday = 89000.00;
var saturday = 98000.00

var sales = [monday, tuesday, wednesday, thursday, friday, saturday]
for loop to iterate over the array.
var total = 0.0;
for (var i = 0; i < sales.length; i++) {
    total += sales[i];
    console.log(sales[i]);
}
console.log("The total is: $" + total);
/* This program generates a seven digit lottery number
The program should generate seven random numbers, each in the range 0-9,
and assign each number to an array element.Then write another loop that displays the contents of the lotterynumbers.*/

/*console.log(Math.floor(Math.random()) * 10);

var lotteryNumbers = [];
for ( var i = 0; i < 7; i++) {
    lottoNum = Math.floor(Math.random() * 10);
    lotteryNumbers.push(lottoNum);

}

var j = 0;
while (j < lotteryNumbers.length) {
    console.log("The lotto number is : " + lotteryNumbers[j]);
    j++;
}*/

/*var team = [];
var numTeamMembers = parseInt(readlineSync.question("How may users would you like to add?: "));

count = 0;
for (var i = 0; i < 6; i++); {
    var name = readlineSync.question("Enter fighter's name: ");
    team.push(name);
    console.log(team);
        
}*/

/*var fighters = ["Chief Carlos", "Queen Antonia", "Prince Carlos II", "War Chief Felipe",]
var names = [];
for (var i = 0; i < 2; i++) {
    newTeamMembers = readlineSync.question("Enter fighter's name: ");
    names.push(newTeamMembers);
}
const newFighters = fighters.concat(names);
var fighters = ["Chief Carlos", "Queen Antonia", "Prince Carlos II", "War Chief Felipe",]
for (var i = 0; i < 7; i++); {
    var newTeamMembers = readlineSync.question("Enter fighter's name: ");
    fighters.push(newTeamMembers);
    
}*/

var fighters = ["Chief Carlos", "Queen Antonia", "Prince Carlos II", "War Chief Felipe",]
for (var i = 0; i < 5; i++) {
    var newTeamMembers = readlineSync.question("Enter fighter's name: ");
    fighters.push(newTeamMembers);
    
}
console.log(fighters);

var myList = ['apples', 'oranges', 'bananas'];
myList.forEach(function(value, index) {
    console.log(value, index);

});
