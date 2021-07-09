/*
  Assuming there are no accidents or delays, the distance
  that a car travels down the interstate can be calculated with the following formula.

  Distance = Speed * Time

  A car is traveling at 70 miles per hour.

  Write a program that displays the following:
  The distance the car will travel in 6 hours.
  The distance the car will travel in 10 hours.
  The distance the car will travel in 15 hours.

  Input:
      Car travels at 70 mph

  Processing:
      distance = speed * time

  Output:
      Display distance in 6 hours
      distance traveled in 10 hours
      distance traveled in 15 hours
*/
var carSpeed = 70;
var distanceAtSix = carSpeed * 6;
var distanceAtFifteen = carSpeed * 15;
var distanceAtTen = carSpeed * 10;

console.log("The distance after six hours: " + distanceAtSix);
console.log("The distance after ten hours: " + distanceAtTen);
console.log("The distance after fifteen hours: " + distanceAtFifteen);
