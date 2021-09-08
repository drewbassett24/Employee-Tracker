DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;
USE employee_tracker;

CREATE table employees (
id INT NOT NULL,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30) NOT NULL,
salary DECIMAL (7, 2) NOT NULL,
department_id INT NOT NULL, 

);

CREATE table departments (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);



INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, " ", "", " ");
