/* 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

var current_users = ["admin", "mubeen", "john", "doe", "jane"];
var new_users = ["admin", "mubeen", "john", "doe", "jane"];

for (var i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i].toLowerCase())) {
    console.log(
      "The username " +
        new_users[i] +
        " is already taken. please enter a new username"
    );
  } else {
    console.log("The username " + new_users[i] + " is available.");
  }
}

console.log("\n");

for (var i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i].toUpperCase())) {
    console.log(
      "The username " +
        new_users[i] +
        " is already taken. please enter a new username"
    );
  } else {
    console.log("The username " + new_users[i] + " is available.");
  }
}
