const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  todo_id: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;
