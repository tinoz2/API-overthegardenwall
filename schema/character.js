import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    image: String,
    about: [{
        personality: String,
        gender: String
    }],
    age: String
});

export const Character = mongoose.model('Character', characterSchema);