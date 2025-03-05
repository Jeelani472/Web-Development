const express=require('express');
const app=express();
const path=require("path");
const mongoose  = require('mongoose');
const Chat=require('./models/chat.js');
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true })); 
const methodoverride=require('method-override');
app.use(methodoverride("_method"));
const ExpressError=require('./ExpressError.js');
const { throws } = require('assert');

main().then(()=>{
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

//Index Route
app.get('/chats',asyncWrap(async(req,res)=>{
        let chats=await Chat.find();
        console.log(chats);
        res.render("index.ejs",{chats});
}))

app.get('/',(req,res)=>{
    res.send("root is working");
})

//New Route

app.get('/chats/new',(req,res)=>{
    // throw new ExpressError(404,"Page not Found!");
    res.render('new.ejs');
})
app.post('/chats',asyncWrap(async(req,res,next)=>{
        let {from,to,msg}=req.body;
        let newChat=new Chat({
            from:from,
            to:to,
            msg:msg,
            created_at:new Date(),
        });
    
        await newChat.save();
        res.redirect('/chats');
}))


//Show Route

app.get('/chats/:id',asyncWrap(async(req,res,next)=>{
        let{id}=req.params;
        let chat=await Chat.findById(id);
        if(!chat){
             next(new ExpressError(404,"Chat not found"));
        };
    res.render("edit.ejs",{chat});
}))

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

//Edit Route

app.get('/chats/:id/edit',asyncWrap(async(req,res)=>{
        let{id}=req.params;
        let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
}))


//Update Route
app.put('/chats/:id', asyncWrap(async (req, res) => {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
    
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
    
        console.log(updatedChat);
        res.redirect('/chats');
}));

//Destroy Route

app.delete('/chats/:id',asyncWrap(async(req,res)=>{
        let { id } = req.params;
        let deletedChat= await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
}))
const handleValidationErr=()=>{
console.log("This was a validation Error .Please Follow rules");
console.dir(err);
return err;
}
app.use((err,req,res,next)=>{
    if(err.name=='ValidationError'){
        err=handleValidationErr(err);
    }
    next(err);
})

//Error Handling MiddleWare
app.use((err,req,res,next)=>{
    let {status=500,message="Some Error"}=err;
    res.status(status).send(message);
})   

app.listen(8080,()=>{
console.log('server is listening on port 8080');
})
