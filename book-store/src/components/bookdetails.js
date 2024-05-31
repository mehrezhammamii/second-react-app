import React from 'react';

function BookDetails({ book }) {
  return (
    <div>
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Published Date:</strong> {book.published_date}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
    </div>
  );
}

export default BookDetails;
