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
