// Qs1: Arrow function for calculating the average of numbers in an array

const arr=[2,4,5,12,45,67];
const getAvg=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length; 
}
console.log(getAvg(arr));

// Qs2: Arrow function to check if a number is even

const isEven=(num)=>num%2==0;
isEven(num);
