const bookModel = require('../database/models/books');

module.exports.getHandler = async (req, res) => {
    try {
        const books = bookModel.getAll();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.postHandler = async (req, res) => {
    try {
        const newBook = req.body;
        bookModel.add(newBook);
        res.status(201).send("Book added successfully");
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.updateHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBook = req.body;
        bookModel.update(id, updatedBook);
        res.status(200).send("Book updated successfully");
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.deleteHandler = async (req, res) => {
    const { id } = req.params;
    try {
        bookModel.deleteById(id);
        res.status(200).send("Book deleted successfully");
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
