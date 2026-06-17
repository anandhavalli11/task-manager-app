const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const app = express();


// ======================
// CORS (FINAL CLEAN FIX)
// ======================
const allowedOrigin =
  "https://task-manager-j26vw6h48-anandhavalli.vercel.app";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Preflight support
app.options("*", cors());


// ======================
// Middleware
// ======================
app.use(express.json());


// ======================
// Routes
// ======================
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


// ======================
// Health Check Route
// ======================
app.get("/", (req, res) => {
  res.send("Server Running OK 🚀");
});


// ======================
// MongoDB Connection
// ======================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));


// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});