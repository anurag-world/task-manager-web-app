const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const taskRoute = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/taskManager")
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});
app.use("/api/tasks", taskRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
