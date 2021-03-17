CREATE TABLE debitThrowing (
  userId int PRIMARY KEY,
  extractRelease DOUBLE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
  );