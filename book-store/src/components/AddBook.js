// AddBook.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddBook = ({ onSave, onClose }) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        published_date: '',
        isbn: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert the published_date to ISO 8601 format
        const formattedDate = new Date(book.published_date).toISOString().split('T')[0];
        // Update the book object with the formatted date
        const updatedBook = { ...book, published_date: formattedDate };
        onSave(updatedBook);
    };

    return (
        <Box sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Author"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="published_date"
                    value={book.published_date}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type='date'
                />
                <TextField
                    label="ISBN"
                    name="isbn"
                    value={book.isbn}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                    <Button variant="contained" color="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AddBook;
