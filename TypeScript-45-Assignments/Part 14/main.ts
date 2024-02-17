/* 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
    Make a list that includes at least three people you’d like to invite to dinner.
    Then use your list to print a message to each person, inviting them to dinner. */

// Create a list of guests
var guests = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];

// Loop through the list of guests
for (const guest of guests) {
  // Print a message to each guest, inviting them to dinner
  console.log(`Dear ${guest},`);
  console.log(`I would be honored to have you as my guest at dinner tonight.`);
  console.log(`Please let me know if you are able to attend.`);
  console.log(`Sincerely,
  Mubeen Javaid\n`);
}
