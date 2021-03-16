CREATE TABLE accountStatement (
  cc INT(7) PRIMARY KEY,
  extract.release DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );