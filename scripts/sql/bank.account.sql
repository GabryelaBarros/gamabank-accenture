CREATE TABLE bankAccount (
  cc INT(7) AUTO_INCREMENT PRIMARY KEY,
  user int,
  balance DOUBLE,
  credit DOUBLE,
  receipt DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user) REFERENCES users(id)
  );