const validator = require("validator");
const chalk = require('chalk');
const getNotes = require('./nodes.js');

console.log(chalk.magenta(getNotes()));

console.log(chalk.blue.inverse(validator.isEmail('143154defaultStatus.ds') 
            || validator.isURL('143154defaultStatus.ds')));