const mongoose = require("mongoose");

// Task schema and model
const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exports
module.exports = mongoose.model("Task", TaskSchema);
