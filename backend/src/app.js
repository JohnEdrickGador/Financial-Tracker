// Initialize expressJS server
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/transactions", require("./routes/transaction.route"));
// app.use("/banks", require("./routes/bank.route"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
