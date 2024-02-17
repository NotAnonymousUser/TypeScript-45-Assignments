/* 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
    Make a list that includes at least three people you’d like to invite to dinner.
    Then use your list to print a message to each person, inviting them to dinner. */
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
