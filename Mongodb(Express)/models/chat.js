const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 50
    },
    created_at: {  
        type: Date,
        required: true,
        default: Date.now
    }
});
chatSchema.index({ from: 1, to: 1, message: 1 }, { unique: true });
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
