/* 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    console.log(`\n${numbers[i]}st\n`);
  } else if (numbers[i] === 2) {
    console.log(`${numbers[i]}nd\n`);
  } else if (numbers[i] === 3) {
    console.log(`${numbers[i]}rd\n`);
  } else if (
    numbers[i] === 4 ||
    numbers[i] === 5 ||
    numbers[i] === 6 ||
    numbers[i] === 7 ||
    numbers[i] === 8 ||
    numbers[i] === 9
  ) {
    console.log(`${numbers[i]}th\n`);
  }
}
