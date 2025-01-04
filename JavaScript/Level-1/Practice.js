// Qs1. Create a number variable num with some value. 
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
let num = 50;
if (num % 10 == 0) {
    console.log("good");
}
else {
    console.log("Bad");
}

// Qs2. Take the user's name & age as input using prompts.
//  Then return back the following statement to the user as an alert (by substituting their name & age):
//  name is age years old. Use template literals to print this sentence.

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old`);


// Qs3. Write a switch statement to print the months in a quarter.
let month = 4;
switch (month) {
    case 1:
        console.log("January,Febrary,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Enter valid quarter");

}

// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and
//  has a total length greater than 5. For a given string print if it is golden or not.

let str = "Apna College";

if (str.length > 5 && (str[0] == "A" || str[0] == "a")) {
    console.log("This String is a Golden String");
}
else {
    console.log("This String is not Golden String");
}


// Qs5. Write a program to find the largest of 3 numbers.
let a = 12;
let b = 20;
let c = 19;

if (a > b && a > c) {
    console.log("a is largest number");
}
else if (a < b && b > c) {
    console.log("b is largest number");
}
else{
    console.log("c is largest number");
}

// Qs6 (Bonus). 
// Write a program to check if 2 numbers have the same last digit. 
// Eg: 32 and 47852 have the same last digit i.e. 2
 let num1=321;
 let num2=47852;
 if(num1%10==num2%10){
    console.log("This numbers have same last digit ");
 }
 else{
    console.log("This numbers not have same last digit ");
 }
