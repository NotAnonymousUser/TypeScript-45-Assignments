/* 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time. */

function make_sandwich(...items) {
  console.log("\nYou ordered a sandwich with the following items:\n");
  for (let item of items) {
    console.log(item);
  }
}

make_sandwich("ham", "cheese", "lettuce", "tomato");
make_sandwich("turkey", "bacon", "spinach");
make_sandwich("pb&j");
