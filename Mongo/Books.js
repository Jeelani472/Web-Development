const mongoose = require('mongoose');

main().then(() => console.log("connection successfully"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author:{
    type: String,
},
price:{
    price: Number
},
});
const Book=mongoose.model('Book',BookSchema);

let book1=new Book({title:"Mathemation",author:"RD Sharma",price:1200
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
