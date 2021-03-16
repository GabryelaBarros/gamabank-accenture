CREATE TABLE account.credit (
  cc INT(7),
  invoice.postings DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bank.account(cc)
  );