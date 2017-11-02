'use strict';

var db = require('./db');

var noteSchema = new db.Schema({
  user_name: String,
  title: String,
  content: String,
  tag: Array,
  date: Date,
  sourceLink: String
});

var tagSchema = new db.Schema({
  user_name: String,
  name: String
});

var Models = {
  NoteList: db.model('NoteList', noteSchema),
  TagList: db.model('TagList', tagSchema)
};

module.exports = Models;