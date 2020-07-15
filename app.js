const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3300;

app.get("/", (req, res) => {
  res.send("Halo, anda sedang berada di endpoint root");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
