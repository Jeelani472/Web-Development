let express=require('express');
let app=express();
let path=require('path');
app.set("view engine","ejs"); 
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'/views'));
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})
app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/basics',(req,res)=>{
    res.render('basic.ejs');
})

app.get('/rolldice',(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render('rolldice.ejs',{diceval});
})

app.get('/ig/:username',(req,res)=>{
   let {username}=req.params;
   const instaData=require('./data.json');
   const data=instaData[username];
   if(data){
    res.render('instagram.ejs',{data});
   }
   else{
    res.render('nopage.ejs');
   }
})
