CREATE TABLE credit(
  cc int PRIMARY KEY,
  creditExpenseValue DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );