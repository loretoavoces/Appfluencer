const mongoose = require('mongoose')
const Schema = mongoose.Schema

const influSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image:  {
        type: String,
        require: true
    },
    instagram: {
        type: String,
        require: true
    },
    followers:  {
        type: String,
        require: true
    }, 
    agency: {
        type: String,
        enum: ["Go Talents", "Soy Olivia", "Miranda Talents", "Pop Cont", "Espectalium", "In Management Agency"]
    },
    location: {                 
        type: {
            type: String
        },
        coordinates: [Number]
    },
    description:  {
        type: String,
        require: true
    },

}, {
    timestamps: true
})

influSchema.index({ location: '2dsphere' })      
const Influ = mongoose.model('Influ', influSchema)

module.exports = Influ
