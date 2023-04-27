const notes = require("express").Router();
const { readAndAppend } = require("../../helpers/fsUtils");
const uuid = require("../../helpers/uuid");
const notesData = require("../../db/db.json");
const fs = require("fs");

// Retrieve any existing notes from the database
notes.get("/", (req, res) => res.json(notesData));

// Add new notes to the existing database
notes.post("/", (req, res) => {
  const { title, text } = req.body;
  console.log(notesData);
  // Check all variables are present
  if (title && text) {
    const newNote = {
      title: title,
      text: text,
      id: uuid(),
    };

    readAndAppend(newNote, "../db/db.json");
    res
      .status(200)
      .json(`Success: Added ${JSON.stringify(newNote)} to database.`);
  } else {
    res.status(400).json("Error in creating new note.");
  }
});

notes.delete("/:id", (req, res) => {
  const data = fs.readFileSync("../db/db.json");
  const notesTest = JSON.parse(data);
  const index = notesTest.findIndex((note) => note.id === req.params.id);

  if (index === -1) {
    return res.status(404).send("Note not found");
  }

  notesTest.splice(index, 1);
  fs.writeFileSync("../db/db.json", JSON.stringify(notesTest));

  res.send("Note deleted successfully");
});

module.exports = notes;
