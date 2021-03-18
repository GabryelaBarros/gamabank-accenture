CREATE TABLE debitThrowing (
  cc int PRIMARY KEY,
  extractRelease DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );