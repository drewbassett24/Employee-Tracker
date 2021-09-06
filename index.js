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


