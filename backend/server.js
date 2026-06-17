const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Test
app.get("/", (req, res) => {
  res.send("Server Running OK 🚀");
});

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});