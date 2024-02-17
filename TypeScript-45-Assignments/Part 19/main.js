/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. */
// Import the program from Exercise 18
// Create a list of guests
var guests = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
// Loop through the list of guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    // Print a message to each guest, inviting them to dinner
    console.log("Dear ".concat(guest, ","));
    console.log("I would be honored to have you as my guest at dinner tonight.");
    console.log("Please let me know if you are able to attend.");
    console.log("Sincerely,\n  Mubeen Javaid\n");
}
// Print a message indicating the number of people you are inviting to dinner
console.log("You are inviting ".concat(guests.length, " people to dinner."));
