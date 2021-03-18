CREATE TABLE debit(
  cc int PRIMARY KEY,
  debitExpenseValue DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );