const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
});

module.exports = Post = mongoose.model("task", TaskSchema);
