const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// =======================
// GET ALL TASKS
// =======================
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.log("GET TASK ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// =======================
// ADD TASK
// =======================
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    // validation
    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Task title is required",
      });
    }

    console.log("TASK RECEIVED:", req.body);

    const task = new Task({
      title: title.trim(),
      completed: false,
      userId: "temp-user", // later auth fix pannalam
    });

    await task.save();

    res.status(201).json(task);
  } catch (err) {
    console.log("ADD TASK ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// =======================
// DELETE TASK
// =======================
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.log("DELETE ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// =======================
// TOGGLE COMPLETE
// =======================
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed;

    await task.save();

    res.json(task);
  } catch (err) {
    console.log("UPDATE ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;