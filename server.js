require("dotenv").config();

const express = require("express");
const connectDB = require("./utils/db");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running and DB connected");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});