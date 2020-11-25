const mongoose = require('mongoose')
const Schema = mongoose.Schema

const influSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image:  {
        type: String,
    },
    instagram: {
        type: String,
        required: true
    },
    followers:  {
        type: String,
        required: true
    }, 
    agency: [{
        type: Schema.Types.ObjectId,
        ref: 'Agency'
    }],
    description:  {
        type: String,
        required: true
    },
}, {
    timestamps: true
})
    
const Influ = mongoose.model('Influ', influSchema)

module.exports = Influ
