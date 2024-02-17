/* 45. Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */

function make_car(manufacturer, model, ...options) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  };

  for (let option of options) {
    let [name, value] = option.split("=");
    car[name] = value;
  }

  return car;
}

let car1 = make_car("Toyota", "Camry", "color=red", "optional_feature=sunroof");

console.log(car1);

let car2 = make_car("Honda", "Accord", "color=blue");

console.log(car2);
