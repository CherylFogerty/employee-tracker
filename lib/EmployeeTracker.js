//get inquirer
const inquirer = require('inquirer');
//get console table
const cTable = require ('console.table');
//get MySqyl client
const MySqyl = require ('mysql2');
//get sql my queries
const crud = require('../db/CRUD');

//create a connection to database