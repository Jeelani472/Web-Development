const mongoose  = require('mongoose');
const Chat=require('./models/chat.js');


main().then(()=>{
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
let allChats=[
    {
        from:"faiz",
        to:"adil",
        msg:'kya karra bhai',
        created_at:new Date()
    },
    {
        from:"sohail",
        to:"adil",
        msg:'hlo jagadeesh',
        created_at:new Date()
    },
    {
        from:"saleem",
        to:"jeelan",
        msg:'Bhai question paper send kar',
        created_at:new Date()
    },
]
Chat.insertMany(allChats);

