DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;
USE employee_tracker;

CREATE table employees (
    id INT NOT NULL,
    first name VARCHAR (30) NOT NULL,
    last name VARCHAR (30) NOT NULL,
    role id INT NOT NULL,
    manager id INT,
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



INSERT INTO employees (id, first name, last name, role id, manager id)
VALUES (1, " ", "", " ");
