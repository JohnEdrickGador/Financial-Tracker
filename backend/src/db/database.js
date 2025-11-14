// Start connection with the database
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./financial-tracker.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to the SQLite3 database");
  }
});

module.exports = db;
