/*
    Prof Tillman teaches a JavaScript class and students are required
    to Take three tests.

    He wants to write a program that his students can use to calculate
    their average
    test score.

    He also wants the program to congratulae the student enthusiastically
    if the average is greater than 95.

    Input:
      Three tests scores 50, 95, 80

    Processing:
      avg = (sum of test scores) / number of tests 3
      if avg > 95 then display Congrats!

    Output:
      the average test score and optionally congratulation message.

*/

var testOne = 100;
var testTwo = 95;
var testThree = 100;

var testAvg = (testOne + testTwo + testThree) / 3;

var msg = "Congrats, you scored higher than 95%, you're the bomb diggity!";

if (testAvg > 95)
    console.log(msg);

console.log("Your average test score is: " + testAvg.toFixed(0) + "%");
