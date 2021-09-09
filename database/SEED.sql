USE employee_tracker;
INSERT INTO employee_tracker.departments (name) VALUES ('Sales');
INSERT INTO employee_tracker.departments (name) VALUES ('Marketing');
INSERT INTO employee_tracker.departments (name) VALUES ('Development');

INSERT INTO employee_tracker.roles (title, salary, department_id) VALUES ('Sales Manager', 50000, 1);
INSERT INTO employee_tracker.roles (title, salary, department_id) VALUES ('Marketing Manager' , 48000, 2);
INSERT INTO employee_tracker.roles (title, salary, department_id) VALUES ('Software Engineer' , 40000, 3);

INSERT INTO employee_tracker.employees (first_name, last_name, role_id, manager_id) VALUES ('Wolf' , 'Baur', 3, 1 );
INSERT INTO employee_tracker.employees (first_name, last_name, role_id, manager_id) VALUES ('Sarah' , 'Williams', 1, 2 );
INSERT INTO employee_tracker.employees (first_name, last_name, role_id, manager_id) VALUES ('Aaron' , 'Allston', 2 , 2);
INSERT INTO employee_tracker.employees (first_name, last_name, role_id, manager_id) VALUES ('Steve' , 'Kenston', 1 , 2);
INSERT INTO employee_tracker.employees (first_name, last_name, role_id, manager_id) VALUES ('Ed' , 'Greenward', 2 , 4);
INSERT INTO employee_tracker.employees (first_name, last_name, role_id, manager_id) VALUES ('Monte' , 'Cook', 3 , 1);
