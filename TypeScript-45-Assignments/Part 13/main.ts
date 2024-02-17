/* 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 */

var favoriteTransportation = [
  "Kawasaki Motorcycle",
  "Electric car",
  "Tesla car",
  "Hybrid car",
];

for (var i = 0; i < favoriteTransportation.length; i++) {
  console.log(`I would like to own a ${favoriteTransportation[i]}.`);
}
