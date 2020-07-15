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

router.get("/", (req, res) => {
  res.send(`Halo, anda berada di ${req.url}`);
});

module.exports = router;
