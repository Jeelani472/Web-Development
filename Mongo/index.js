const mongoose=require('mongoose');
// mongoose.connect(' mongodb://127.0.0.1:27017/test');

main().then(()=>console.log("connection successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userSchema);

// const user1=new User({
//     name:"adil",
//     email:"adilahmed099@gmail.com",
//     age:20,
// })
// user1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Bruce",email:"bruce@gmail.com",age:47},
//     {name:"Peter",email:"peter@gmail.com",age:30},
// ]).then((data)=>{
//     console.log(data);
// })

// User.findOne({age:{$gt:47}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:{$gt:48}},{age:55})
// .then((data)=>{
//     console.log(data);
// });

// User.findOneAndUpdate({name:"Peter"},{age:55},{new:true})
// .then((data)=>{
//     console.log(data);
// });

User.deleteMany({age:48}).then((res)=>{
    console.log(res);
});
