const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const auth = require("../middleware/auth");


// ================= GET TASKS =================
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});


// ================= ADD TASK =================
router.post("/", auth, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    userId: req.user.id,
    completed: false,
  });

  await task.save();
  res.json(task);
});


// ================= DELETE TASK =================
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});


// ================= TOGGLE COMPLETE (IMPORTANT) =================
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed;

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;