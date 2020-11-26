const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    password: String,
    
    role: {
        type: String,
            enum: ['ADMIN', 'USER'],
            default: 'USER',
            required: true,
        },
    favourites: [{
        type: Schema.Types.ObjectId,
        ref: 'Influ'
    }]
    }, {
      timestamps: true
    }
);
  
const User = mongoose.model('User', userSchema)

module.exports = User