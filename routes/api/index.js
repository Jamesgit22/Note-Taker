const express = require("express");

// Import modular router
const notesRouter = require("./notes.js");
const app = express();
app.use(express.json());
app.use("/notes", notesRouter);

module.exports = app;
