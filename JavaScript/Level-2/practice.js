// Qs1. Write a JavaScript program to get the first n elements of an array. n can be any positive number.
//  For example: for array [7, 9, 0, -2] and n = 3,
//  print [7, 9, 0].

let n=3;
const arr=[12,34,12,-1,-90];
console.log(arr.slice(0,n));

// Qs2. Write a JavaScript program to get the last n elements of an array.
//  n can be any positive number. For example: 
// for array [7, 9, 0, -2] and n = 3, print [9, 0, -2].

const arr2=[7,9,0,-2];
let n2=3;
console.log(arr2.slice(arr2.length-n2));

// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str="";
console.log(str.includes(""));

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lowercase.

let ch="Apna College";
let index=5;
if(ch[index]===ch[index].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is not  lowercase");
}


// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.


let newStr="    Amazon is a ecommerce website   ";
console.log(newStr.trim());


// Qs6. Write a JavaScript program to check if an element exists in an array or not.
const fruits=["banana","apple","grapes","papaya"];
console.log(fruits.includes("apple"));

             //  (OR)

let item=3;

if(fruits.indexOf(item)!=-1){
    console.log("Element is exist in the array");
}
else{
    console.log("Element is not exist in the array");
}

