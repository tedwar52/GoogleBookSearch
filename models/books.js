const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, default: ""}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

/*
image: { type: String, default: ""},
    href: { type:String, default: "", unique: true }
*/