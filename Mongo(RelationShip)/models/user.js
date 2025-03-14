const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URL = 'mongodb://127.0.0.1:27017/relationship';

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.log(err);
});

// Create Schema
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id:false,
            location: String,
            city: String
        }
    ]
});

// Create Model
const User = mongoose.model("User", userSchema);

// Add Users Data
const addUsers = async () => {
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [{
            location: "221B Baker Street",
            city: "London"
        }]
    });

    user1.addresses.push({ location: "P32 WallStreet", city: "London" });
    const result = await user1.save();
    console.log(result);
}

addUsers();
