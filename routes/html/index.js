const express = require("express");
const app = express();
const path = require('path');
app.use(express.json());


app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../../public/notes.html')))

module.exports = app;
