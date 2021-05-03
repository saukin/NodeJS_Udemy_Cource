const validator = require("validator");
const chalk = require('chalk');
const yargs = require('yargs');

const addNote = require('./notes.js');
const getNotes = require('./notes.js');
const write = console.log;


//Cusomise yargs version
yargs.version('2.0');

//CRUD notes
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        write(chalk.green("Adding new note"));
        write(chalk.green("Title: ", argv.title));
        write(chalk.green("Body: ", argv.body));
    }
})

yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function() {
        write(chalk.red("Removing a note"));
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function() {
        write(chalk.yellow("Listing notes..."))
    }
})

yargs.command({
    command: "read",
    describe: "read a note",
    handler: function() {
        write(chalk.magenta("Reading a note ..."))
    }
})

// write(yargs.argv);
yargs.parse();
