/* 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
 Then write one sentence describing what the program does.

~1st Program~

This program returns a simple message to the user & also uses a variable. */
var firstName = "Donald";
console.log(
  "Hello ".concat(firstName, ", would you like to learn some Python today? \n")
);
/*
~2nd program~
This program returns lower case , upper case & title case values of a string(name) */
// Lowercase
console.log("Lowercase:", firstName.toLowerCase());
// Uppercase
console.log("Uppercase:", firstName.toUpperCase());
// Titlecase
console.log(
  "Titlecase:",
  firstName.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  })
);
/* Mubeen Javaid
17/02/24 */
