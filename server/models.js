const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name needs to be at least 3 characters long."],
        required: true    
    },
    quotes: [{
        type: String,
        minlength: [5, "Quote needs to be at least 5 characters long."]
    }]
}, {timestamps: true})

mongoose.connect("mongodb://localhost:27017/authors_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));

const Author = mongoose.model('author', AuthorSchema);

module.exports = {Author};
    
