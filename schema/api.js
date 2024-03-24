import mongoose from "mongoose";
import Soundtrack from './soundtrack.js'
import Character from './character.js'

const apiSchema = new mongoose.Schema({
    soundtrack: {
        model: Soundtrack
    },
    character: {
        model: Character,
    }
})