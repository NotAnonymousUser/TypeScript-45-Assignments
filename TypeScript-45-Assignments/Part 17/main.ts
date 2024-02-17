/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

// Create a list of guests
var guests = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
  "Elon Musk",
  "Bill Gates",
  "Steve Jobs",
];

// Print a message saying that you can invite only two people for dinner
console.log("\nUnfortunately, I can only invite two people for dinner.\n");

// Remove guests from your list one at a time until only two names remain in your list
while (guests.length > 2) {
  var guest = guests.pop();
  console.log("Sorry, ".concat(guest, ", I can't invite you to dinner.\n"));
}

// Print a message to each of the two people still on your list, letting them know they’re still invited
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
  var guest = guests_1[_i];
  console.log("You're still invited, ".concat(guest, "!\n"));
}

// Remove the last two names from your list, so you have an empty list
guests.pop();
guests.pop();

// Print your list to make sure you actually have an empty list at the end of your program
console.log(guests);
