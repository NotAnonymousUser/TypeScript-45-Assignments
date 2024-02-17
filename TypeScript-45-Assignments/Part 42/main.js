/* 42. Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
var magicians1 = [
    "David Copperfield",
    "Harry Blackstone Jr.",
    "Siegfried & Roy",
];
function show_magicians(magicians1) {
    for (var _i = 0, magicians1_1 = magicians1; _i < magicians1_1.length; _i++) {
        var magician = magicians1_1[_i];
        console.log(magician);
    }
}
function make_great(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] += " the Great";
    }
}
show_magicians(magicians1);
make_great(magicians1);
show_magicians(magicians1);
