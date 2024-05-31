import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetails from './bookdetails'; // Import the BookDetails component

function BooksList() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null); // State to track the selected book

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('/api/books/getAll'); // Assuming your API endpoint is /api/books
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleBookClick = (book) => {
        // Set the selected book when clicked
        setSelectedBook(book);
    };

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id} onClick={() => handleBookClick(book)}> {/* Call handleBookClick on click */}
                        <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
                    </li>
                ))}
            </ul>
            {selectedBook && <BookDetails book={selectedBook} />} {/* Render BookDetails if a book is selected */}
        </div>
    );
}

export default BooksList;
