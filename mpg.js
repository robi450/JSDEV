/*
  A car's mile sper gallon (MPG) can be calculated with the following formula:
  MPG = Miles Driven  / Gallons Used

  Write a program that calculates the mpg for  100 miles Driven
  and 70 gallons of gas used.

  Inputs:
      100 miles Driven
      70 gallons of gas
  Processing:
      miles driven / gallons Used

  Output:
      MPG
*/

var milesDriven = 100;
var gallonsUsed = 70;

var milesPerGallon = milesDriven / gallonsUsed;


console.log("The MPG is: " + Math.floor(milesPerGallon));
