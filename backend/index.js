const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

// CREATE new transaction
app.post("/transactions/new", (req, res) => {});

// READ transactions
app.get("/transactions/list", (req, res) => {});

// UPDATE a transaction
app.put("/transactions/update/:id", (req, res) => {});

// DELETE a transaction
app.delete("/transactions/delete/:id", (req, res) => {});
