/*

Repetition structures:
   While loop
   Do while loop

*/
var temp = 0;

while (temp < 80) {
  console.log("Raising the temp 10 degrees");
  temp += 10;
}

console.log("The temp has reached 80 degrees, stopping...");

for (var i = 0 ; i < 80; i += 10) {
  console.log("Raising the temp 10 degrees, it's now " + i + " degrees.");
}
console.log("The temp has reached 80 degrees, stopping...");
