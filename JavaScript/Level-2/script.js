// let name="     Mark zukerberg    ";
// console.log(name);
// console.log(name.trim());

let msg="help!";
console.log(msg.trim().toUpperCase());

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let str="ILoveCoding";
// console.log(str.indexOf("Love"));

// console.log(str.toUpperCase());

// console.log(str.slice(2));
// console.log(str.slice(1,5));
// console.log(str.slice(-2));

// let newStr=str.replace("Love","do");
// console.log(newStr);

let names="ApnaCollege";
let newname=names.splice(4);
newname.replace("l","t");
console.log(newname);

// console.log(newStr.repeat(4));


let fruits=["banana","orange","apple","grapes"];
console.log(fruits[0]);
fruits[2]="papaya";
fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("mango");

console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("papaya"));

console.log(fruits.includes("mango"));

let newfruits=["watermelon","guava"];
console.log(newfruits.concat(fruits));

console.log(newfruits.join());

let num=[23,10,19,200];
console.log(num.sort());

console.log(fruits.sort());

const colors=["red","yellow","blue","orange","pink","white"];

console.log(colors.splice(4));
console.log(colors.splice(0,1));
console.log(colors.splice(0,1,"voilet"));
console.log(colors);

let multi_array=[[1,2,3],[4,5,6],[7,8,9]];
console.log(multi_array);
