const mongoose = require("mongoose");
const { Schema } = mongoose;

const MONGO_URL = "mongodb://127.0.0.1:27017/relationship";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("MongoDB is connected");
}

main().catch((err) => console.log(err));

// Create User Schema
const userSchema = new Schema({
  username: String,
  email: String,
});

//create Post Schema

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//Create models

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addUsers = async () => {
  //   let user1 = new User({
  //     username: "rahulkumar",
  //     email: "rahul@gmail.com",
  //   });
  //   let post1=new Post({
  //     content:"Hello World",
  //     likes:7
  //   });

  //   post1.user=user1;
  //   await user1.save();
  //   await post1.save();

  //Second post data
  let user =await  User.findOne({username:"rahulkumar"});
  let post2 = new Post({
    content: "Bye Bye :)",
    likes: 23,
  });

  post2.user = user;
  await post2.save();
};

// addUsers();


const findPosts=async()=>{
  let res= await Post.findOne({}).populate("user","username");
  console.log(res);
}
findPosts();

