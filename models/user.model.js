const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true
        },
      name: String,
      password: String,
          role: {
              type: String,
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