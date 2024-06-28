const express = require("express");
const app = express();
require("./dbconnect");
require("dotenv").config();

const PORT = 4000;

app.use("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(PORT, () => {
  console.log("Server started");
});
