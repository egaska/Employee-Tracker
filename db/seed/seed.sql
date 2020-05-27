use employeeTracker;
INSERT INTO department (name) VALUES ("Managment");
INSERT INTO department (name) VALUES ("Property");
INSERT INTO department (name) VALUES ("HR");

INSERT into role (title, salary, department_id) VALUES ("Manager", 50000, 1);
INSERT into role (title, salary, department_id) VALUES ("Document Review Specialist", 35000, 2);
INSERT into role (title, salary, department_id) VALUES ("Claims Admin", 40000, 2);
INSERT into role (title, salary, department_id) VALUES ("HR Rep", 40000, 3)	;

-- Auto Department
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Justin", "Lillis", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Charlie", "Zhao", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Archibald", "Zhao", 3, 1);

-- Property Department
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Emily", "Gaska", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Mimosa", "Goering", 2, 2);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Tarzan", "Harding", 3, 2);


-- HR Department
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Eileen", "Gaska", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Linus", "Lillis", 4, 3);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Duke", "Gaska", 4, 3);