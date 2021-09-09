DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;
USE employee_tracker;

CREATE table departments (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (30) NOT NULL
);

CREATE TABLE roles (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (30) NOT NULL,
salary DECIMAL (7, 2) NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) references departments (id)
);


CREATE table employees (
id INT PRIMARY KEY  AUTO_INCREMENT,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id) references roles (id),
FOREIGN KEY (manager_id) references employees (id)
);

