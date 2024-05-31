const connection = require('../database.js'); // Correct path to database

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM books';
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  
  getOne: function(id, callback) {
    const sql = 'SELECT * FROM books WHERE id = ?';
    connection.query(sql, [id], function (error, results) {
      callback(error, results);
    });
  },

  add: function(book, callback) {
    const sql = 'INSERT INTO books (title, author, published_date, isbn) VALUES (?, ?, ?, ?)';
    connection.query(sql, [book.title, book.author, book.published_date, book.isbn], function (error, results) {
      callback(error, results);
    });
  },

  update: function(id, book, callback) {
    const sql = 'UPDATE books SET title = ?, author = ?, published_date = ?, isbn = ? WHERE id = ?';
    connection.query(sql, [book.title, book.author, book.published_date, book.isbn, id], function (error, results) {
      callback(error, results);
    });
  },

  deleteById: function(id, callback) {
    const sql = 'DELETE FROM books WHERE id = ?';
    connection.query(sql, [id], function(error, results) {
      callback(error, results);
    });
  }
};