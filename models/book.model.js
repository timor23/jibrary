const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v <= new Date().getFullYear();
            },
            message: `{VALUE} is not a valid year`
        }
    },
    language: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {
    Book
}