var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  loginname: String,
  password: String,
  //note: String,
  //updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', TodoSchema);