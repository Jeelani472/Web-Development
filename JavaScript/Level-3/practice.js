// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2,
//  Result should be arr = [1, 3, 4, 5, 6, 3].

const arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number. Example: if number = 287152, count = 6.

let number1 = 287152;
let count = 0;
while (number1 != 0) {
    count++;
    number1 = Math.floor(number1 / 10);
}
console.log(count);


// Qs3. Write a JS program to find the sum of digits in a number. Example: if number = 287152, sum = 25.

let number2 = 287152;  // Input number
let sum = 0;           // Variable to store the sum of digits

while (number2 != 0) {
    let rem = number2 % 10;
    sum += rem;
    number2 = Math.floor(number2 / 10);
}

console.log(sum);  // Output the sum of digits

// Qs4. Print the factorial of a number n. 
// [Factorial of a number n is the product of all positive integers less than or equal to a
//  given positive integer and denoted by that integer.]
//  Example: 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040,
//  5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120, 3! 
// (factorial of 3) = 1 x 2 x 3 = 6, 0! is always 1.

let n=5;
let fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(`factorial of a number ${n} is ${fact}`);


// Qs5. Find the largest number in an array with only positive numbers.


const newarr = [1, 21, 23, 42, 53, 6, 24, 3];

let largest=-1;
for(let i=0;i<newarr.length;i++){
    largest=Math.max(newarr[i],largest);
}
console.log(`The largest number in an array is ${largest}`);
