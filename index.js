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
                new inquirer,Separator(),
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
        .then ((answer) => {
            switch (answer.action) {
                case 'View all employees' :
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


// create a table of employees by role


// create a table of employees by department


// create a table of employees by manager


// adding employees (and role/manager)



// adding a role


// adding a dept


// updating a role


// updating a manager (make sure employee cannot be own manager)




// removing employee

// removing role

// removing dept


