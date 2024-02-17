// 3.  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var firstName = "Donald";
// Lowercase
console.log("Lowercase:", firstName.toLowerCase());
// Uppercase
console.log("Uppercase:", firstName.toUpperCase());
// Titlecaseno
console.log(
  "Titlecase:",
  firstName.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  })
);
