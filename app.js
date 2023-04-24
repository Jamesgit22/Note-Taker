// Import Express

const express = require("express");
const path = require('path');
const notesData = require('./db/db.json');
const fs = require('fs');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));



// Get request to load notes.html screen
app.get('/notes', (req, res) => res.status(200).sendFile(path.join(__dirname, '/public/notes.html')))

// Get previously saved notes from database
app.get('/api/notes', (req, res) => res.json(notesData));

app.post('/api/notes', (req, res) => {
    const newNote = req.body
    console.log(JSON.stringify(req.body))
    fs.writeFile('db/db.json', JSON.stringify(req.body), err => {
        if (err) throw err

        console.log("Added Note");
    } )
})


// Add a listener for a port.
app.listen(port, () => console.log(`listening on port ${port} http://localhost:${port}`))