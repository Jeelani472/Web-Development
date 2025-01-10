// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [1, 2, 3, 4, 5];
let square = arr.map((el) => {
    return el * el;
});
console.log(square);

let sum = arr.reduce((ans, el) => ans + el);
console.log(sum);
let avg = sum / arr.length;
console.log(avg);


//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.


let newarr = arr.map((el) => {
    return el + 5;
})
console.log(newarr);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array

let str = ["APNA COLLEGE", "GFG", "Leetcode", "TAKEUFORWARD"];
let newstr = str.filter((el) => {
    return el == el.toUpperCase();
})
console.log(newstr);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//  The function should return a new array with the original array values and all
// of the additional arguments doubled.

const doubleAndReturnArgs=((arr,...args)=>[
...arr,...args.map((v)=>v*2)
]);

doubleAndReturnArgs([2,3,4,5,5],2,4,6);


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

console.log(mergeObjects({a:1,b:2,c:3},{d:4,e:20}));
