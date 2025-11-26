const db = require("../db/database");

// CREATE new transaction
exports.createTransaction = (req, res) => {
  const {
    amount,
    description,
    bank,
    account_type,
    transaction_type,
    transaction_date,
  } = req.body;
  if (
    !amount ||
    !description ||
    !bank ||
    !account_type ||
    !transaction_type ||
    !transaction_date
  ) {
    return res.status(400).json({ message: "Missing required field/s" });
  }

  // Get the id of the bank that was specified
  const bank_query = `SELECT bank_id FROM banks WHERE abbreviation = ?`;

  db.get(bank_query, [bank], (err, row) => {
    if (err) return res.status(500).json({ message: err.message });

    if (!row) {
      console.log("No bank found");
      return res.status(404).json({ message: "Bank not found." });
    }

    const bank_id = row.bank_id;

    const sql = `
    INSERT INTO transactions (amount, description, bank_id, account_type, transaction_type, transaction_date)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(
      sql,
      [
        amount,
        description,
        bank_id,
        account_type,
        transaction_type,
        transaction_date,
      ],
      function (err) {
        if (err) return res.status(500).json({ message: err.message });
        res
          .status(201)
          .json({ id: this.lastID, message: "Transaction created." });
      }
    );
  });
};

// READ transactions
exports.readTransactions = (req, res) => {
  // const getTransactions = `SELECT * FROM transactions ORDER BY transaction_date DESC`;
  const getTransactions = `
  SELECT
  t.id,
  t.amount,
  t.description,
  t.bank_id,
  b.name AS bank_name,
  b.abbreviation AS bank_abbreviation,
  t.account_type,
  t.transaction_type,
  t.transaction_date
  FROM transactions t
  JOIN banks b ON t.bank_id = b.bank_id
  ORDER BY transaction_date DESC
  `;
  db.all(getTransactions, (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });

    if (!rows) {
      console.log("Transactions table empty");
      return res.status(404).json({ message: "No transactions found" });
    }

    return res.status(200).json({ result: rows });
  });
};

// UPDATE a transaction
exports.updateTransaction = (req, res) => {
  const { id } = req.params;
  const {
    amount,
    description,
    bank,
    account_type,
    transaction_type,
    transaction_date,
  } = req.body;

  const getBankIdQuery = "SELECT bank_id FROM banks WHERE abbreviation = ?";

  db.get(getBankIdQuery, [bank], (err, row) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!row) return res.status(404).json({ message: "Transaction not found" });
    const bank_id = row.bank_id;

    const updateRowQuery = `
    UPDATE transactions
    SET amount = ?, description = ?, bank_id = ?, account_type = ?, transaction_type = ?, transaction_date = ?
    WHERE id = ?
    `;

    db.run(
      updateRowQuery,
      [
        amount,
        description,
        bank_id,
        account_type,
        transaction_type,
        transaction_date,
        id,
      ],
      function (err) {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: "Transaction updated successfully." });
      }
    );
  });
};

// DELETE a transaction
exports.deleteTransaction = (req, res) => {
  const { id } = req.params;

  const deleteRowQuery = `DELETE FROM transactions WHERE id = ?`;

  db.run(deleteRowQuery, [id], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Deleted transaction successfully" });
  });
};
