const db = require('./db')

const noteSchema = new db.Schema({
    user_name: String,
    title: String,
    content: String,
    tag: Array,
    date: Date,
    sourceLink: String
  })
  
  const tagSchema = new db.Schema({
    user_name: String,
    name: String
  })

  const userSchema = new db.Schema({
    username:String,
    password:String
  }
  )
  
  const Models = {
    NoteList: db.model('NoteList', noteSchema),
    TagList: db.model('TagList', tagSchema)
  }
  