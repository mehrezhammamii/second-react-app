const express = require('express');
const cors = require('cors');
const handler = require('./handler')

//Create an Express App
const app = express();
//Require application Route modules
const booksRoute = require('../route/books');

//Setting the port and listening for connections
const port = 3000;

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/books', booksRoute);
app.get("/api/books",handler.getHandler)
app.post("/api/books",handler.postHandler)
app.put("/api/books/:id",handler.updateHandler)
app.delete("/api/books/:id",handler.deleteHandler)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = app; // export the express app.








