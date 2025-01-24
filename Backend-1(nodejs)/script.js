// using require()
// console.log('hello');
// const math=require('./demo/app');
// console.log(math.sum(2,4));
// console.log(math.PI);

// const func=require('./demo/index');
// console.log(func);

// var figlet = require("figlet");

// figlet("Jeelan!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// using import()

import {sum,PI} from './reference.js'
console.log(sum(2,3));
console.log(PI);
