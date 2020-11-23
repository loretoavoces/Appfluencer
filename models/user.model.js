const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    password: String,
    
    role: {
        type: String,
            enum: ['ADMIN', 'USER'],
            default: 'USER',
            require: true,
        },
    },
    {
      timestamps: true
    }
);
  
const User = mongoose.model('User', userSchema)

module.exports = User