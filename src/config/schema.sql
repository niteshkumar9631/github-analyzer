CREATE TABLE IF NOT EXISTS profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(200),
  bio TEXT,
  avatar_url TEXT,
  location VARCHAR(200),
  company VARCHAR(200),
  blog VARCHAR(200),
  email VARCHAR(200),
  public_repos INT DEFAULT 0,
  followers INT DEFAULT 0,
  following INT DEFAULT 0,
  total_stars INT DEFAULT 0,
  most_used_language VARCHAR(100),
  account_created_at DATETIME,
  github_url VARCHAR(200),
  analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);