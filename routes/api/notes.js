const notes = require('express').Router();
const { readAndAppend } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');
const notesData = require('../../db/db.json')

// notes.get('/', (req, res) => res.json('success'));
notes.get('/', (req, res) => res.json(notesData));

module.exports = notes;