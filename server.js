const express = require("express");
const app = express();
app.use(express.json());
//const pgp = require('pg-promise');
//const pgpromise = pgp();
//const dbConnection = pgpromise("postgres://postgres:niners49@localhost:5432/postgres");
const bodyParser = require("body-parser")
const fs = require('fs');

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

/// PULL MAIN PAGE 2/19/23

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

});