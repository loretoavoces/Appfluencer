const mongoose = require('mongoose')
const Schema = mongoose.Schema

const influSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image:  {
        type: String,
        imageName: String,
        path: String,
        originalName: String
    },
    instagram: {
        type: String,
        require: true
    },
    followers:  {
        type: String,
        require: true
    }, 
    agency: [{
        type: Schema.Types.ObjectId,
        ref: 'Agency'
    }],
    description:  {
        type: String,
        require: true
    },
}, {
    timestamps: true
})
    
const Influ = mongoose.model('Influ', influSchema)

module.exports = Influ
