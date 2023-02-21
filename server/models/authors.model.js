const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    author: { 
        type: String,
        required: [true, "the field is required"],
        minlength: [3, "the field needs to be at least 3 characters long"]
     }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;