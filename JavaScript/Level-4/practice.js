// Q1: Create a program that generates a random number representing a dice roll (between 1 and 6)

let random = Math.floor(Math.random() * 6) + 1;
console.log(`the dice roll is ${random}`);

// Q2: Create an object representing a car that stores the following properties:
//  name, model, color. Print the car’s name.

const car = {
    name: "BMW",
    model: "M3",
    color: "White"
}
console.log(car.name);

// Q3: Create an object Person with their name, age, and city. 
// Edit the city’s original value to change it to “New York.” 
// Add a new property country and set it to "United States."

const person = {
    name: "John",
    age: 34,
    city: "Canada",
}
console.log(person);
person.city = "New York";
person.country = "USA";
console.log(person);
