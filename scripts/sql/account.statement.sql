CREATE TABLE account.statement (
  cc INT(7),
  extract.release DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bank.account(cc)
  );