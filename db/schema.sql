### Schema
DROP DATABASE IF EXISTS tbmt2yhbc7bxfbop;

CREATE DATABASE tbmt2yhbc7bxfbop;

USE tbmt2yhbc7bxfbop;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	createdAt DATE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)

);

