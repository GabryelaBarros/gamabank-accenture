CREATE TABLE accountCredit (
  cc INT(7) PRIMARY KEY,
  invoice.postings DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );