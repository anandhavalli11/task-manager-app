const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    userId: {
      type: String,
      default: "guest",
    },
  },
  {
    timestamps: true, // createdAt + updatedAt automatically வரும்
  }
);

module.exports = mongoose.model("Task", taskSchema);