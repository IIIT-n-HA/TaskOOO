const express = require("express");
const app = express();
require("./dbconnect");
require("dotenv").config();
const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");

app.use(express.json());
app.use(cors());

const PORT = 4000;

app.use("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api/v1", UserAPI);
app.use("/api/v1", TaskAPI);

app.listen(PORT, () => {
  console.log("Server started");
});
