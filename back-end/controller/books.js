const book = require('../database/models/books');

module.exports = {
  // Method to fetch all books from the blog database.
  getAllBooks: function(req, res) {
    book.getAll(function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  // Method to add a student to the database via the respective model function.
  addBook: function(req, res) {
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        published_date: req.body.published_date,
        isbn: req.body.isbn
    };

    book.add(newBook, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ message: 'Book added successfully!', bookId: results.insertId });
    });
  },

  // Method to get one book by id.
  getOneBook: function(req, res) {
    const bookId = req.params.id;
    console.log('book ID:', bookId); // Add this line to debug
    book.getOne(bookId, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  deleteById : function(req,res){
    const bookId=req.params.id;
    book.deleteById(bookId,function(err,results){
      if(err){
        return res.status(500).send(err);
      }

      res.json(results)
    })
  }, 
  update: function(req, res) {
        const bookId = req.params.id;
        const title=req.body.title
        const author= req.body.author
        const published_date= req.body.published_date
        const isbn= req.body.isbn
        console.log('Received bookId:', bookId);

        // Validate that all required parameters are provided
        if (!title  || !author || !published_date || !isbn) {
            return res.status(400).send({ error: 'title ,author, published_date and isbn are required' });
        }

        // Call the update function from the model with correct parameters
        book.update(id, title ,author, published_date,isbn,function(err, results) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(results);
        });
    }

};
