// forEach();
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (el) {
    console.log(el);
})
//  or
function print(el) {
    console.log(el);
}
arr.forEach(print);

let student = [
    {
        name: "adil",
        marks: 70
    },
    {
        name: "jeelan",
        marks: 67
    },
    {
        name: "faizaan",
        marks: 56
    }
];
student.forEach((students) => {
    console.log(students.name);
})

//map();
let newarr = arr.map((el) => {
    return el * el;
});
console.log(newarr);

let gpa = student.map((el) => {
    return el.marks / 10;
})
console.log(gpa);

//filter();

let num = arr.filter((el) => {
    return el % 2 == 0;
});
console.log(num);

let num2 = arr.filter((el) => {
    return el % 2 != 0;
});
console.log(num2);

//every();
arr.every((el) => {
    return el % 2 != 0;
});

//some()

arr.every((el) => {
    return el % 2 != 0;
});


//reduce();
[2,3,5,6,7].reduce((res,el)=>(res+el));



let number=[2,4,6,19,60];
number.reduce((max,el)=>{
if(el>max){
    return el;
}
else{
    return max;
}
});


number.reduce((min,el)=>{
if(el<min){
    return el;
}
else{
    return min;
}
});

//default parameter
function sum(a,b=2){
    return a+b;
}
console.log(sum(2));

//spread

let mini=Math.min(...arr);
console.log(mini);

console.log(..."apna college");

//spread with arrays

let newarr2=[...arr];
console.log(newarr2);

//spread with objects
let data={
    email:"iranman@gmai.com",
    password:"abcd"
};

let datacopy={...data,idx:123};
console.log(datacopy);

//convert arr into objects

let obj={...arr};
console.log(obj);

///rest;

function min(){
    console.log(arguments);
}
min(1,2,4,1,6,8,4);


// array destructuring;
let names=["tony","bruce","steve","peter"];

let [winner,runnerUp]=names;
console.log(winner);
console.log(runnerUp);

// object destructuring;

let student2={
        username: "@adil_07",
        age:23,
        class:9,
        subjects:["hindi","english","math","science"],
        password:"abcd"
    };
let{username:user,password:secret}=student2;



