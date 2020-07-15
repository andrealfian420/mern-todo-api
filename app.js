const express = require("express");
const dotenv = require("dotenv");

const app = express();
const todoAPI = require("./routes/api/todo");

dotenv.config();
const PORT = process.env.PORT || 3300;

app.get("/", (req, res) => {
  return res.status(403).json({
    status: "error",
    message: `You're forbidden to access this endpoint`,
  });
});

app.use("/api/todo", todoAPI);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
