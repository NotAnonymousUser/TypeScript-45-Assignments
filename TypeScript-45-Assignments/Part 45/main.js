/* 45. Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var _b = option.split("="), name_1 = _b[0], value = _b[1];
        car[name_1] = value;
    }
    return car;
}
var car1 = make_car("Toyota", "Camry", "color=red", "optional_feature=sunroof");
console.log(car1);
var car2 = make_car("Honda", "Accord", "color=blue");
console.log(car2);
