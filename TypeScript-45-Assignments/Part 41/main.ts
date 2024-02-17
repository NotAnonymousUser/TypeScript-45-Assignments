/* 41. Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicians = [
  "David Copperfield",
  "Harry Blackstone Jr.",
  "Siegfried & Roy",
];

function show_magicians1(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians1(magicians);
