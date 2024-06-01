// booksList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetails from './bookdetails'; // Import the BookDetails component
import EditBook from './editBook';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './booklist.css';

function BooksList() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [editingBook, setEditingBook] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books/getAll');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setModalOpen(true);
    };

    const handleDelete = async (bookId) => {
        try {
            await axios.delete(`http://localhost:3000/api/books/${bookId}`);
            setBooks(books.filter(book => book.id !== bookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleEdit = (book) => {
        setEditingBook(book);
    };

    const handleSave = async (editedBook) => {
        try {
            const formattedDate = new Date(editedBook.published_date).toISOString().split('T')[0];
            const payload = {
                ...editedBook,
                published_date: formattedDate
            };
            await axios.put(`http://localhost:3000/api/books/${editedBook.id}`, payload);
            setBooks(books.map(book => (book.id === editedBook.id ? editedBook : book)));
            setEditingBook(null);
        } catch (error) {
            console.error('Error saving book:', error);
        }
    };

    const handleClose = () => {
        setEditingBook(null);
    };

    return (
        <div className="books-list-container">
            <Typography variant="h4" gutterBottom className="books-title">
                Books
            </Typography>
            <Grid container spacing={3}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card className="book-card">
                            <CardMedia
                                className="book-card-media"
                                image={book.coverImageUrl || 'default_cover_image_url.jpg'}
                                title={book.title}
                                onClick={() => handleBookClick(book)}
                            />
                            <CardContent className="book-card-content">
                                <Typography variant="h5" component="div">
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {book.author}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Published: {book.published_date}
                                </Typography>
                                <div className="book-card-buttons">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEdit(book)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(book.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="book-details-modal-title"
                aria-describedby="book-details-modal-description"
            >
                <div className="modal-content">
                    {selectedBook && <BookDetails book={selectedBook} onClose={() => setModalOpen(false)} />}
                </div>
            </Modal>
            {editingBook && (
                <EditBook
                    book={editingBook}
                    onSave={handleSave}
                    onClose={handleClose}
                />
            )}
        </div>
    );
}

export default BooksList;
