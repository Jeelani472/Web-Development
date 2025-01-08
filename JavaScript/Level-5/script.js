function hello(){
    console.log('hello');
}
hello();

//Function with Arguments

function printName(name){
    console.log(name);
}
printName("Jeelan");

function sum(a,b){
    console.log(a+b);
}
sum(7,8);


function calsum(a,b){
    return a+b;
}
console.log(calsum(7,10));

let str=["hi","hello","bye",'!'];
function concate(str){
    let result='';
    for(let i=0;i<str.length;i++){
         result+=str[i];
    }
    return result;
}
console.log(concate(str));

// scope

let sums=53; //global scope
function calssum(a,b){
    let sums=a+b;//funtion scope
    console.log(sums);
}
calssum(2,5);
console.log(sums);

//block scope
for(let i=1;i<=5;i++){
    console.log(i);
}
//Lexical scope

function outerfunc(){
    let x=20;
    let y=10;
    function innerfunc(){
        console.log(x);
    }
    innerfunc();
}
outerfunc();

//function expression

const cal=function(a,b){
return a+b;
}
console.log(cal(2,4));

//higher order function

function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello");
}
multipleGreet(greet,2);


//Methods 
const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator.add(2,4));
console.log(calculator.sub(1,4));
console.log(calculator.mul(5,4));

// or

const calculator2={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(add(2,4));
console.log(sub(1,4));
console.log(mul(5,4));
