const bookModel = require('../models/book.model');

const getAllBooks = async (req, res) => {
    // res.send("BBB");
    const data = await bookModel.Book.find({});
    return res.status(200).send(data)
}

const getBooksByYear = async (req, res) => {
    const {year} = req.params;
    console.log(year)
    bookModel.Book.find({ year: { $eq: year } }, (err, data) => {
        if (err) throw err;
        return res.status(200).json(data);
    })
    // return res.status(200).send(data)
}

const addNewBook = (req, res) => {
    const {title, author, year, language, rating} = req.body;
    // console.log(req.body)
    const book = new bookModel.Book({
        title: title,
        author: author,
        year: year,
        language: language,
        rating: rating
    })

    book.save((err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}

const updateBook = (req, res) => {

}

const deleteBook = (req, res) => {
    const { id } = req.params;
    bookModel.Book.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(404).json(err);
        return res.status(200).json(data);
    })
}

module.exports = {
    getAllBooks,
    getBooksByYear,
    addNewBook,
    updateBook,
    deleteBook
}
