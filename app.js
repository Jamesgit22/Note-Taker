// Import Express

const express = require("express");
const path = require('path')
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));



// Get request to load notes.html screen
app.get('/notes', (req, res) => res.status(200).sendFile(path.join(__dirname, '/public/notes.html')))


// Add a listener for a port.
app.listen(port, () => console.log(`listening on port ${port} http://localhost:${port}`))