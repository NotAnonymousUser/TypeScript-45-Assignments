/* 42. Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

let magicians1 = [
  "David Copperfield",
  "Harry Blackstone Jr.",
  "Siegfried & Roy",
];

function show_magicians2(magicians1) {
  for (let magician of magicians1) {
    console.log(magician);
  }
}

function make_great1(magicians1) {
  for (let i = 0; i < magicians1.length; i++) {
    magicians1[i] += " the Great";
  }
}

show_magicians2(magicians1);

make_great1(magicians1);

show_magicians2(magicians1);
