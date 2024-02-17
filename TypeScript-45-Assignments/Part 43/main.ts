/* 43. Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

let magicians = [
  "David Copperfield",
  "Harry Blackstone Jr.",
  "Siegfried & Roy",
];

function show_magicians(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians) {
  let great_magicians = [];
  for (let magician of magicians) {
    great_magicians.push(magician + " the Great");
  }
  return great_magicians;
}

show_magicians(magicians);

let great_magicians = make_great(magicians);

show_magicians(great_magicians);
