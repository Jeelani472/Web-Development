const student = {
    name: "Jeelan",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.math + this.phy + this.eng) / 3;
        console.log(avg);
    }
};
student.getAvg();

//try and catch
try {
    console.log(a);
}
catch {
    console.log("caught an error.. a is not defined ");

}

//arrow functions


const sum = (a, b) => {
    console.log(a + b);
}
sum(2, 10);

const pow = (a, b) => {
    console.log(a ** b);
}
pow(2, 3);

const print = n => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
print(5);

//implicit function

const func = (a, b) => a + b;
console.log(func(2, 20));

//SetTimeout Function

console.log("hi there!");
setTimeout(() => {
    console.log("Apna College");
}, 4000);
console.log("welcome to");


//SetInterval
let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

clearInterval(id);


//this keyword in arrow function and normal fucntion

const student2 = {
    name: "Adil",
    age: 21,
    marks: 95,
    prop: this,
    getName: function () {
        return this.name;
    },
    getMarks: () => {
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);
        }, 2000);
    },
}
console.log(student2.getName());
console.log(student2.getMarks());
student2.getInfo1();
student2.getInfo2();


