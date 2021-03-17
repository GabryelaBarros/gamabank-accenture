CREATE TABLE creditThrowing (
  userId int PRIMARY KEY,
  invoicePostings DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
  );