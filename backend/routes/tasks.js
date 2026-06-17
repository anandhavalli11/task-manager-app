const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE TASK
router.post("/", async (req, res) => {
  try {
    console.log("TASK RECEIVED:", req.body);

    const task = new Task({
      title: req.body.title,
    });

    await task.save();
    res.json(task);
  } catch (err) {
    console.log("ADD TASK ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// TOGGLE / UPDATE TASK (MARK COMPLETED)
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // toggle completed
    task.completed = !task.completed;

    // optional title update
    if (req.body.title !== undefined) {
      task.title = req.body.title;
    }

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE TASK
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;