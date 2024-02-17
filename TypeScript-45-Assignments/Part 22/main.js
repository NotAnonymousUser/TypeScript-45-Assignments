/* 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program. */
// Create an array to store the items
var items = ["Arabic", "Spanish", "English", "French", "German", "Italian"];
// Print the array to the console
console.log(items[6]); // This will produce an index error because there are only 5 items in the array.
// Correct the error
items[6] = "Portuguese";
// Print the array to the console
console.log(items[6]); // This will print the last item without any error.
