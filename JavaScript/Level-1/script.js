//let keyword is  not redeclared  and it is a block scope
let a = 12;
a = a + 12;
console.log(a);
//const is fixed value not redeclared and reassigned and it is a block scope
const pi = 3.14;
let r = 2;
let area_of_circle = pi * r * r;
console.log(area_of_circle);

//var keyword is globally scoped and redeclared and reassigned the value;
var age = 18;
var age = age + 1;
console.log(age);

// operator precedence
let expression = (5 + 2) / 7 + 1 * 2;
console.log(expression);

//String data type

let names = "Jeelan";
console.log(names);

let firstname = "Mulla";
let Middlename = "Khader";
let lastname = "Jeelani";
console.log(`${firstname + " " + Middlename + " " + lastname}`);
console.log(firstname[0]);
console.log(firstname.length);

//undefined:A varaible has not been assigned a value

let str;
console.log(str);

//null 
let price = null;
price = 120;
console.log(price);



//create a traffic light system that shows what to do based on color

let color = prompt("Enter the color");

if (color == "red") {
    console.log("Stop!");
}
if (color == "Green") {
    console.log("Go");
}
if (color == "Yellow") {
    console.log("Slow Down");
}


//create system to calculate popcorn price based on size customer asked for

let size = prompt("Enter the Size ");
if (size == "XL") {
    console.log("Popcorn Price is: 250");
}
else if (size == "L") {
    console.log("Popcorn Price is: 200");
}

else if (size == "M") {
    console.log(" Popcorn Price is: 100");
}
else {
    console.log("Popcorn Price is: 50");
}

//Use Print Switch Statement to print the day of week using the number variable day with values 1 to 7

let day =prompt("Enter the day ");

switch (day) {
    case "1": 
    console.log("Monday");
        break;
    case "2": 
    console.log("Tuesday");
        break;
    case "3": 
    console.log("Wednesday");
        break;
    case "4": 
    console.log("Thursday");
        break;
    case "5": 
    console.log("Friday");
        break;
    case "6": 
    console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default: "Please enter correct day"
}

//alert
alert("Something is Wrong");
console.error("This is an error msg");
console.warn("This is an warning msg");

