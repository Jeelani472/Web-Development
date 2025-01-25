const express=require('express');
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("this is a basic response");
//     let code="<h1>Fruits</h1> <ul><li>apple</li></ul>";
//     res.send(code);
// })

app.get("/",(req,res)=>{
    res.send('you contacted root path');
})
app.post("/apple",(req,res)=>{
    res.send('you contacted apple path on post request');
})
app.get("/apple",(req,res)=>{
    res.send('you contacted apple path');
})

app.get('/:username/:id',(req,res)=>{
    let {username,id}=req.params;
    console.log(username,id);
})

app.get('/search',(req,res)=>{
    let {q}=req.query;
    res.send(`these are the search resuts:${q}`);
})
