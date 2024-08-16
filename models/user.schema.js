const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String,required: true },
    
    password: {
        type: String,
        required: true,
        
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
