const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: { 
        type: String,
        required: [true, "Setup is required"],
        minlength: [4, "First name must be at least 4 characters long"]
    },
    punchline: { 
        type: String,
        required: [true, "Punchline is required"],
        maxlength: [50, "Punchline must be less than 50 characters long"]
    },

}, 
{ timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
