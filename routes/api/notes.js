const notes = require("express").Router();
const { readAndAppend } = require("../../helpers/fsUtils");
const uuid = require("../../helpers/uuid");
const notesData = require("../../db/db.json");

// Retrieve any existing notes from the database
notes.get("/", (req, res) => res.json(notesData));

// Add new notes to the existing database
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  // Check all variables are present
  if (title && text) {
    const newNote = {
      title: title,
      text: text,
      id: uuid(),
    };

    readAndAppend(newNote, "././db/db.json");
    res
      .status(200)
      .json(`Success: Added ${JSON.stringify(newNote)} to database.`);
  } else {
    res.status(400).json("Error in creating new note.");
  }
});

// notes.delete

module.exports = notes;
