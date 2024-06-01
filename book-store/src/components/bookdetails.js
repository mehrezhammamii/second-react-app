// bookdetails.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const BookDetails = ({ book, onClose }) => {
    if (!book) return null;

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h6" component="h2">
                {book.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>
                <strong>Author:</strong> {book.author}
            </Typography>
            <Typography sx={{ mt: 2 }}>
                <strong>Published Date:</strong> {book.published_date}
            </Typography>
            <Typography sx={{ mt: 2 }}>
                <strong>ISBN:</strong> {book.isbn}
            </Typography>
            <Button onClick={onClose} sx={{ mt: 2 }}>Close</Button>
        </Box>
    );
};

export default BookDetails;
