const express = require('express');
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
const {v4:uuidv4}=require('uuid');
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
app.use(express.json());

let posts = [
    {
        id:uuidv4(),
        username: "apnacollege",
        content: " i love coding!",
    },
    {
        id:uuidv4(),
        username: "Jeelan",
        content: " Hard work is important to achieve success!",
    },
    {
        id:uuidv4(),
        username: "Adil Ahmed",
        content: " i got selected for my 1st internship!",
    }
]
app.get('/posts', (req, res) => {
    res.render("index.ejs", {posts});
})
app.get('/posts/new',(req,res)=>{
    res.render("new.ejs");
})
app.post('/posts/',(req,res)=>{
   let {username,content}=req.body;
   let {newid}=uuidv4();
   posts.push({newid,username,content});
  res.redirect('/posts');
})
app.get('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render('show.ejs',{post});
})
app.patch('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let {newcontent}=req.body;
    let post=posts.find((p)=>id===p.id);
    post.content=newcontent;
    console.log(post);
   res.redirect('/posts');
 })
app.get('/posts/:id/edit',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
   res.render('edit.ejs',{post});
 })
app.listen(3000, () => {
    console.log("app is listening ");
})
