// Import Express

const express = require("express");
// const path = require('path');
// const notesData = require('./db/db.json');
const fs = require("fs");
const api = require("./routes/api/index.js");
const html = require("./routes/html/index.js");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);
app.use("/notes", html);

app.listen(port, () =>
  console.log(
    `listening on port ${port} https://hidden-badlands-10348.herokuapp.com , http://localhost:${port}`
  )
);
