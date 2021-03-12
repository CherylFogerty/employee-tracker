//get inquirer
const inquirer = require('inquirer');
//get console table
const cTable = require ('console.table');
//get MySqyl client
const MySqyl = require ('mysql2');
//get sql my queries
const crud = require('../db/CRUD');

//create a connection to database
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Whitley#1',
    datebase: 'company_db'
});

//employee tracker class
class EmployeeTracker {
    constructor() {
        }

    //intialize employee tracker
    intializeEmployeeTracker() {
        console.log(crud.title)
    //open tracker menu
    this.trackerMenu()
    }
//calls  up a menu with application options 
trackerMenu() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do',
        name: 'selection',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'View employees by manager',
            'View employees by department (with budget totals',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Delete a department',
            'Delete a role',
            'Delete an employee',
            'Exit the application'
            
        ]
    })

// send to the correct function based on the selection

.then(({selection}) => {
    switch (selection) {
        case 'View all departments':
            this.viewAllDepartments();
            break;
        case 'View all roles':
            this.viewAllRoles();
            break;
        case 'View all employees':
            this.viewAllEmployees();
            break;
        case 'View employees by manager':
            this.viewAllEmployeesByManager();
            break;
        case 'View employees by department (with budget totals)':
            this.viewAEmployeesByDepartment();
            break;
        case 'Add a department':
            this.addDepartment();
            break;
        case 'Add a role':
            this.addRole();
            break;
        case 'Add an employee':
            this.addEmployee();
            break;
        case 'Update an employee role':
            this.updateEmployeeRole();
            break;
        case 'Delete a department':
            this.deleteDepartment();
            break;
        case 'Delete a role':
            this.deleteRole();
            break;
        case 'Delete an employee':
            this.deleteEmployee();
            break;
        case 'Exit the applicaton':
            this.exitTracker();
            break;
      };
   });
};