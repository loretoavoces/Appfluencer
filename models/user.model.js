const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true
        },
      name: {
        type: String,
        require: true
    },
      password: {
        type: String,
        require: true
    },
          role: {
              type: String,
              require: true,
              enum: ['ADMIN', 'USER'],
              default: 'USER'
          }
    },
    {
      timestamps: true
    }
);
  
const User = mongoose.model('User', userSchema);

module.exports = User;