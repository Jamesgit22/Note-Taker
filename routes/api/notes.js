const notes = require("express").Router();
const { readAndAppend, readFromFile, writeToFile } = require("../../helpers/fsUtils");
const uuid = require("../../helpers/uuid");
const fs = require("fs");

// Retrieve any existing notes from the database
notes.get("/", (req, res) => {
  readFromFile("././db/db.json", "utf8").then(data => {
    // console.log(data);
    res.status(200).send(data);
  })

});

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

notes.delete("/:id", (req, res) => {
  readFromFile("././db/db.json", "utf8").then(data => {
    console.log(data);
    console.log(req.params.id)
    const parsedData = JSON.parse(data);
    const index = parsedData.findIndex((note) => note.id === req.params.id);

    if (index === -1) {
      return res.status(404).send("Note not found");
    }
  
    parsedData.splice(index, 1);
    writeToFile("././db/db.json", parsedData);
  
    res.status(200).json({ok: true});
  });
});

module.exports = notes;
