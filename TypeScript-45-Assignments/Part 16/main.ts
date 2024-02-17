/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

// Create a list of guests
var guests = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];

// Print a message stating that you found a bigger dinner table
console.log("\nI found a bigger dinner table! I can now invite more people.\n");

// Add a new guest to the beginning of the array
guests.unshift("Elon Musk");

// Add a new guest to the middle of the array
guests.splice(1, 0, "Bill Gates");

// Add one new guest to the end of the list
guests.push("Steve Jobs");

// Loop through the list of guests
for (const guest of guests) {
  // Print a message to each guest, inviting them to dinner
  console.log(`Dear ${guest},`);
  console.log(`I would be honored to have you as my guest at dinner tonight.`);
  console.log(`Please let me know if you are able to attend.`);
  console.log(`Sincerely,
  Mubeen Javaid\n`);
}
