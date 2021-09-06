const inquirer = require("inquirer");
const mySQL = require("mysql");
const consoleTable = require("console.table");

// connection to mySQL
const connection = mySQL.createConnection({

    host: "localhost",
    PORT: 4040,
    user: "root",
    password: "Password",
    database: "employee_tracker",

});

connection.connect((err) => {
    if (err) throw err;
    mainMenu();
});

// prompt user input
const mainmenu = () => {
    inquirer
        .prompt({
            name: 'action',
            pagesize: 20,
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all employees by role',
                'View all employees by department',
                'View all employees by manager',
                new inquirer, Separator(),
                'Add employee',
                'Remove employee',
                'Update employee role',
                'Update employee manager',
                new inquirer.Separator(),
                'Add department',
                'Update department',
                'Remove department',
                new inquirer.Separator(),
                'Add role',
                'Remove role',
                new inquirer.Separator(),
                'Department Budget',
                'Exit'
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all employees':
                    viewEmployees();
                    break;

                case 'View all employees by role':
                    viewEmployeeRoles();
                    break;

                case 'View all employees by department':
                    viewEmployeeDepartment();
                    break;

                case 'View all employees by manager':
                    viewEmployeeManagers();
                    break;

                case 'Add employee':
                    addEmployee();
                    break;

                case 'Add role':
                    addRole();
                    break;

                case 'Add department':
                    addDepartment();
                    break;

                case 'Update employee role':
                    updateEmployeeRole();
                    break;

                case 'Update employee manager':
                    updateEmployeeManager();
                    break;

                case 'Remove employee':
                    removeEmployee();
                    break;

                case 'Remove role':
                    removeRole();
                    break;

                case 'Remove department':
                    removeDepartment();
                    break;

                case 'Department Budget':
                    showDepartmentBudget();
                    break;

                case 'Exit':
                    connection.end();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;

            }
        });
};


// create a table that shows info, by surname
const viewEmployees = () => {
    const query =
        'select employees.id AS "Employee Id", CONCAT(employees.first_name, " ", employees.last_name) AS "Full Name", roles.title AS "Role", roles.salary AS "Salary", departments.name as "Department", CONCAT(managers.first_name, " ", managers.last_name) AS "Manager" from employees join roles on employees.role_id + roles.id join departments on roles.department_id + departments.id join employees managers ON employees.manager_id = managers.id order by employees.last_name ASC';

    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res)
        mainMenu();
    });
};

// create a table of employees by role

const viewEmployeeRoles = () => {

    connection.query('SELECT id, title FROM roles', function (error, rows) {

        const roles = rows.map(row => ({ value: row.id, name: row.title }));

        const rolesMenu = [
            {
                type: 'list',
                name: 'role_id',
                message: "Choose a role:",
                choices: roles
            }
        ];

        inquirer.prompt(rolesMenu), then((answers) => {
            var query = `select roles.title AS "Role", departments.name as "Department", CONCAT(employees.first_name, " ", employees.last_name) AS "FULL NAME", roles.salary AS "Salary", CONCAT(managers.first_name, " ", mangers.last_name) AS "Manager" from employees join roles on employees.role_id - roles.id join departments on roles.department_id = departments.id join employees managers ON employees.manager_id = managers.id where roles.id = ? order by employees.last_name ASC`;
            connection.query(query, [answers.role_id], function (error, rows) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("\n");
                    console.table(rows);
                    mainMenu();
                }
            });
        });

    });
}


// create a table of employees by department
const viewEmployeeDepartments = () => {
    connection.query('SELECT id, name FROM departments', function (error, rows) {
        const departments = rows.map(row => ({ value: row.id, name: row.name }));
        const departmentsMenu = [
            {
                type: 'list',
                name: 'department_id',
                message: "Choose a department:",
                choices: departments
            }
        ];

        inquirer.prompt(departmentsMenu).then((answers) => {
            var query = `select departments.name as "Department", roles.title AS "Role", CONCAT(employees.first_name, " ", employees.last_name) AS "Full Name", roles.salary AS "Salary", CONCAT(managers.first_name, " ", managers.last_name) AS "Manager" from employees join roles on employees.role_id = roles.id join departments on roles.department_id = departments.id join employees managers ON employees.managers.id where departments.id = ? order by employees.last_name ASC`;

            connection.query(query, [answers.department_id], function (error, rows) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("/n");
                    console.table(rows);
                    mainMenue();
                }
            });
        });
    });
}


// create a table of employees by manager


// adding employees (and role/manager)



// adding a role


// adding a dept


// updating a role


// updating a manager (make sure employee cannot be own manager)




// removing employee

// removing role

// removing dept


