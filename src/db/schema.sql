-- heroku database name preassigned
-- CREATE DATABASE heroku_82100a74448265a;

USE heroku_82100a74448265a;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id INT(10) AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(255) NOT NULL,
devoured boolean NOT NULL default 0
);