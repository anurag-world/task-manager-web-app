const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const taskRoute = require("./routes/tasks")

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/taskManager")
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
res.send("<p>Website is running!</p>");
});
app.use("/api/tasks", taskRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
