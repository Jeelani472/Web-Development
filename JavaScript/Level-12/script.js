//CallStacks

// function f1(){
//     console.log("Hi by f1");
// }

// function f2(){
//     f1();
//     console.log("Hi by f2");
// }
// f2();

// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans= two()+one();
//     console.log(ans);
// }
// three();
// console.log(ans);


//Callback Hell


let h1 = document.querySelector("h1");


// function changeColor(color, delay, newcolorchange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (newcolorchange) {
//             newcolorchange();
//         }
//     }, delay);
// }


// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("yellow", 1000,()=>{
//             changeColor("pink",1000);
//         });
//     })
// });


// function savetoDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 5) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetoDb(
//     "apnacollege",
//     () => {
//         console.log("success1:data1 was saved");
//         savetoDb("helloworld", () => {
//             console.log(" success2:data2 was saved");
//             savetoDb("Jeelan", () => {
//                 console.log("success3:data3 was saved");
//             }, () => {
//                 console.log("failure3:weak connection data was not saved");
//             },)
//         }, () => {
//             console.log("failure2:weak connection data was not saved");
//         },);
//     }, () => {
//         console.log("failure1:weak connection data was not saved");
//     }
// )


// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         if (internetspeed > 5) {
//             resolve("success: data was saved");
//         }
//         else {
//             reject("failure: weak connections");
//         }
//     })
// }
// let request = savetoDb("apnacollege")
//     .then((result) => {
//         console.log(result);
//         console.log("promise was resolved");
//         return savetoDb("hellworld");
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("promise2 resolved");
//         return savetoDb("Jeelan");
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("promise3 resolved");
//     })
//     .catch((error) => {
//         console.log(error);
//         console.log("promise was rejected");
//     })

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            h1.style.color = color; 
            resolve("color changed");
        }, delay);
    });
}


changeColor("red", 1000)
    .then(() => {
        console.log("promise1 was resolved");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("promise2 was resolved");
        return changeColor("purple", 1000);
    })
    .then(() => {
        console.log("promise3 was resolved");
        return changeColor("pink", 1000);
    })
    .then(() => {
        console.log("promise4 was resolved");
        return changeColor("yellow", 1000);
    });


