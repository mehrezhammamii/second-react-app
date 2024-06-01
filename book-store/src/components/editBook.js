import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function EditBook({ book, onSave, onClose }) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [publishedDate, setPublishedDate] = useState(book.published_date);
    const [isbn, setIsbn] = useState(book.isbn);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { ...book, title, author, published_date: publishedDate, isbn };
        onSave(updatedBook);
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Published Date"
                        type="date"
                        value={publishedDate}
                        onChange={(e) => setPublishedDate(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="ISBN"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default EditBook;
