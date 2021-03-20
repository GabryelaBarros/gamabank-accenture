CREATE TABLE credit(
  id int PRIMARY KEY AUTO_INCREMENT,
  cc INT(7),
  value DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cc) REFERENCES bankAccount(cc)
  );