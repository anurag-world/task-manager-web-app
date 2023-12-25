const mongoose = require("mongoose");

// Task schema and model
const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exports
module.exports = mongoose.model("Task", TaskSchema);
