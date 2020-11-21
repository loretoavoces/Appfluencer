const mongoose = require('mongoose')
const Schema = mongoose.Schema

const influSchema = new Schema({
    name: String,
    endpoint: String, 
    image: String,
    instagram: String,
    followers: String, 
    agency: {
        type: String,
        enum: ["Go Talents", "Soy Olivia", "Miranda Talents", "Pop Cont", "Espectalium", "In Management Agency"]
    },
    description: String,

}, {
    timestamps: true
})

const Influ = mongoose.model('Influ', influSchema)
module.exports = Influ
