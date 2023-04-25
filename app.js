// Import Express

const express = require("express");
// const path = require('path');
// const notesData = require('./db/db.json');
const fs = require('fs');
const api = require('./routes/api/index.js')
const html = require('./routes/html/index.js')
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use('/api', api);
app.use('/notes', html);



app.listen(port, () => console.log(`listening on port ${port} http://localhost:${port}`))





















// Get request to load notes.html screen

// Get previously saved notes from database
// app.get('/api/notes', (req, res) => res.json(notesData));

// app.post('/api/notes', (req, res) => {
//     const newNote = req.body
//     console.log(JSON.stringify(req.body))
//     fs.writeFile('db/db.json', JSON.stringify(req.body), err => {
//         if (err) throw err

//         console.log("Added Note");
//     } )
// })


// Add a listener for a port.