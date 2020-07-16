const router = require("express").Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Todo Model
const Todo = require("../../models/Todos");

dotenv.config();

// Setup mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Test db connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error !"));
db.on("open", () => console.log("MongoDB Connected !"));

// Get all todos
router.get("/", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) throw new Error(err);

    if (data.length === 0) {
      return res.json({
        status: "no data",
        data: [],
      });
    }

    res.json({
      status: "ok",
      data,
    });
  });
});

// Insert a new todo
router.post("/", (req, res) => {
  Todo.find({ todo_id: req.body.todo_id }, (err, data) => {
    if (err) throw new Error(err);

    if (data.length) {
      return res.status(400).json({
        status: "error",
        message: "The todo is already exist !",
      });
    }

    const { todo_id, task, done } = req.body;

    if (!todo_id || !task || !done) {
      return res.status(400).json({
        status: "error",
        message: "Please provide the required data",
      });
    }

    const newTodo = new Todo({
      todo_id,
      task,
      done,
    });

    newTodo.save((err, data) => {
      if (err) {
        return res.status(400).json({
          status: "error",
          error: err,
        });
      }

      res.json({
        status: "ok",
        data,
      });
    });
  });
});

module.exports = router;
