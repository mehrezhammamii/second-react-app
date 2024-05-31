const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllBooks, addBook, getOneBook,update, deleteById} = require('../controller/books');

/// Books ROUTES ///

//GET request to fetch all books. NOTE This must come before route for id.
router.get('/getAll', getAllBooks);
// GET request for one book.
router.get('/:id', getOneBook);
// POST request for creating a book.
router.post('/add', addBook);
// DELETE request for deleting a book
router.delete('/:id',deleteById);
//UPDATE request for updating a book
router.put('/:id',update);

module.exports = router;

