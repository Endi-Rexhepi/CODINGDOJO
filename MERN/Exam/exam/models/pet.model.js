const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    pet_Name: { 
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet Name must be at least 3 characters long"]
    },
    pet_Type: { 
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "The Pet Type must be at least 3 characters long"]
    },
    pet_Description: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "The Pet Description must be at least 3 characters long"]
    },
    skill1: { 
        type: String
    },
    skill2: { 
        type: String
    },
    skill3: { 
        type: String
    }
}, 
{ timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;
