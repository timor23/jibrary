const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', (req, res) => {
    bookController.getAllBooks(req, res);
}).get('/:year', (req, res) => {
    bookController.getBooksByYear(req, res);
}).post('/', (req, res) => {
    bookController.addNewBook(req, res);
}).delete('/:id', (req, res) => {
    bookController.deleteBook(req, res);
}).put('/:id', (req, res) => {
    bookController.updateBook(req,res);
})

module.exports = router;