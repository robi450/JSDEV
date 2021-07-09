/*
    Write a program that displays the day of the week for a number in the range
    1 through 7.
    The program shoule dislay the crresponding day of the week, where 1 = Monday
    2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday,
    7 = Sunday. The program should display an error message if the user
    enters a number that is outside of the range of 1 through 7.

*/
var day = 1;

switch(day) {
  case 1:
      console.log("That day is Monday");
      break;
  case 2:
      console.log("That day is Tuesday");
      break;
  case 3:
      console.log("That day is Wednesday");
      break;
  case 4:
      console.log("That day is Thursday");
      break;
  case 5:
     console.log("That day is Friday");
     break;
  case 6:
      console.log("That day is Saturday");
      break;
  case 7:
      console.log("That day is Sunday");
      break;
  default:
      console.log("Sorry, incorrect day.");
      break;
}
