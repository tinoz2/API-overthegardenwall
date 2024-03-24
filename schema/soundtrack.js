import mongoose from "mongoose";

const soundtrackSchema = new mongoose.Schema({
    id: Number,
    name: String,
    link: String,
    duration: String
});

export const Soundtrack = mongoose.model('Soundtrack', soundtrackSchema);