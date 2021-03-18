CREATE TABLE creditThrowing (
  cc int PRIMARY KEY,
  invoicePostings DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );