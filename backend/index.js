// Initialize expressJS server
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

// Start connection with the database
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./financial-tracker.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to the SQLite3 database");
  }
});

// CREATE new transaction
app.post("/transactions/new", (req, res) => {});

// READ transactions
app.get("/transactions/list", (req, res) => {});

// UPDATE a transaction
app.put("/transactions/update/:id", (req, res) => {});

// DELETE a transaction
app.delete("/transactions/delete/:id", (req, res) => {});

// CREATE new bank
app.post("/banks/new", (req, res) => {});

// READ banks
app.get("/banks/list", (req, res) => {});

// UPDATE bank details
app.put("/banks/update/:bank_id", (req, res) => {});

// DELETE a bank
app.delete("/bank/delete/:id", (req, res) => {});
