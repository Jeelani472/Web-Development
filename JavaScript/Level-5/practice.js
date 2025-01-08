// Qs1. Write a JavaScript function that returns array elements larger than a given number.

const arr = [12, 34, 56, 78, 1, 23, 31];

function Getlarge(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>num) {
        console.log(arr[i]);
        }
    }
}
console.log(Getlarge(arr, 13));

// Qs2. Write a JavaScript function to extract unique characters from a string.

let str = "ababsbabs";

function unique_char(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr.join("");
}

console.log(unique_char(str));


// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name.

let country = ["India", "Usa", "austraila", "UAE", "China", "Pakistan"];
function LargestCountry(country) {
    let idx = 0;
    let max = 0;
    for (let i = 0; i < country.length; i++) {
        let str = country[i];
        if (str.length > max) {
            idx = i;
            max = str.length;
        }
    }
    return country[idx];
}
console.log(LargestCountry(country));


// Qs4. Write a JavaScript function to count the number of vowels in a string argument.

let s = "abdulkhaderjeelani";

function CountVowels(s) {
    let count=0;
for(let i=0;i<s.length;i++){
  if(s[i]=='a'|| s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
    count++;
  }
}
return count;
}
console.log(CountVowels(s));


// Qs5. Write a JavaScript function to generate a random number within a given range (start, end).

function random(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(random(2,10));
