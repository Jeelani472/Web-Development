const express=require('express');
const app=express();


//Creating our own MiddleWare
app.use((req,res,next)=>{
    console.log(req.method,req.hostname,req.path);
    next();
})

app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(req.time);
    next();
})

// app.use('/api',(req,res,next)=>{
//     let {token}=req.query;
//     if(token=='giveaccess'){
//         next();
//     }
//     res.send('ACCESS DENIED!');
// })

const CheckToken=(req,res,next)=>{
    let {token}=req.query;
    if(token=='giveaccess'){
        next();
    }
    res.send('ACCESS DENIED!');
}


app.get('/',(req,res)=>{
    res.send('Hi ,I am root');
})

app.get('/random',(req,res)=>{
    res.send('This is  a random page');
})

app.use('/api',CheckToken,(req,res,next)=>{
    res.send('data');
})

app.listen(8080,()=>{
    console.log('server is listening on port 8080');
})

