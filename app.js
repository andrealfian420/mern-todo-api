const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const todoAPI = require("./routes/api/todo");

dotenv.config();
const PORT = process.env.PORT || 3300;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todo", todoAPI);

app.get("/", (req, res) => {
  return res.status(403).json({
    status: "error",
    message: `You're forbidden to access this endpoint`,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
