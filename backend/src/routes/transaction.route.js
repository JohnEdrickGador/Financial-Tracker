const express = require("express");
const router = express.Router();

const {
  createTransaction,
  readTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction.controller");

router.post("/new", createTransaction);
router.get("/list", readTransactions);
router.put("/update/:id", updateTransaction);
router.delete("/delete/:id", deleteTransaction);

module.exports = router;
