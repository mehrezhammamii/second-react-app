const mysql = require('mysql2');


// Create a database connection and export it from this file.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //username imported from the config files
    password: 'root', //password imported from the config files
    database: 'book_db' //database name imported from the config files
  });

// Connect to the database and make sure to log a message related to the connection state 

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
})

module.exports = connection;




