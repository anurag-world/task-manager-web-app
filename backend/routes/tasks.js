const router = require("express").Router();
const Task = require("../models/Task");

// Create all tasks
router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single task
router.get("/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new Task
router.post("/create", async (req, res) => {
  const { task } = req.body;
  const newTask = new Task({ task });
  try {
    const createdTask = await newTask.save();
    res.status(201).json({ message: "Task created successfully", createdTask });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a task
router.put("/update/:id", async (req, res) => {
  const taskId = req.params.id;
  const { task } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { task },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a task
router.delete("/delete/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Task not found!" });
  }
});

// Delete all tasks
router.delete("/remove/all", async (req, res) => {
  try {
    await Task.deleteMany({});
    res.status(200).json({ message: "Tasks deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Task not found!" });
  }
});

// Exports
module.exports = router;
