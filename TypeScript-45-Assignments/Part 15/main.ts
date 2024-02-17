/* 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

// Create a list of guests
var guests = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];

// Print a message stating that one of the guests can't make it
console.log(
  "\nUnfortunately, Nelson Mandela can't make it to dinner tonight.\n"
);

// Replace the name of the guest who can't make it with the name of the new person you are inviting
guests[2] = "Elon Musk";

// Loop through the list of guests
for (const guest of guests) {
  // Print a message to each guest, inviting them to dinner
  console.log(`Dear ${guest},`);
  console.log(`I would be honored to have you as my guest at dinner tonight.`);
  console.log(`Please let me know if you are able to attend.`);
  console.log(`Sincerely,
  Mubeen Javaid\n`);
}
