//Objects Creation
const student = {
    name: "Jeelan",
    age: 21,
    marks: 90.0
}

console.log(student);
console.log(student["name"]);
console.log(student.name);

// Object Updation
student["name"] = "Adil";
console.log(student);

const post = {
    username: "@jeelan",
    content: "This is my first post",
    reposts: 5,
    likes: 150,
    tags: ["@Adil", "@Faizan123"]
}

console.log(post);

// Add key 
post.gender = "Male";
console.log(post);

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
console.log(obj[2]);
console.log(obj.true);


delete obj[1];
console.log(obj);

//Nested Objects

const classInfo = {
    Adil: {
        grade: "A",
        City: "Hyderabad"
    },
    Faizan: {
        grade: "A+",
        City: "Delhi"
    },
    Saleem: {
        grade: "B",
        City: "Chennai"
    }
}
console.log(classInfo);
console.log(classInfo.Adil.grade);
classInfo.Adil.City = "Bellary";
console.log(classInfo);

//Array of Objects

const classInfo2 = [
    {
        name: "Adil",
        grade: "A",
        City: "Hyderabad"
    },
    {
        name: "Faizan",
        grade: "A+",
        City: "Delhi"
    },
    {
        name: "Saleem",
        grade: "A+",
        City: "Delhi"
    }
]
console.log(classInfo2);
console.log(classInfo2[0].name);

//Math Objects
//properties
const pi=Math.PI;
console.log(pi);

const E=Math.E;
console.log(E);

//Methods

console.log(Math.abs(3-10));


console.log(Math.pow(2,3));


console.log(Math.floor(10.56));


console.log(Math.ceil(10.6));


let random=Math.random();
console.log(random);


//generate random integer from 1 to 9

console.log(Math.floor(Math.random()*10)+1);


// //generate random integer from 1 to 100

console.log(Math.floor(Math.random()*100)+1);


// //generate random integer from 21 to 25

console.log(Math.floor(Math.random()*5)+21);
