const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agencySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    location: {                 
        type: {
            type: String
        },
        coordinates: [Number]
    },
    street:  {
        type: String,
        require: true
    },
    influencer: [{
        type: Schema.Types.ObjectId,
        ref: 'Influ'
    }]
}, {
    timestamps: true
})

agencySchema.index({ location: '2dsphere' })      
const Agency = mongoose.model('Agency', agencySchema)

module.exports = Agency
