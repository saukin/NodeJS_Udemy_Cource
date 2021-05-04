const validator = require("validator");
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');
const { describe } = require("yargs");
// const addNote = require('./notes.js');
// const getNotes = require('./notes.js');
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
    handler(argv) {
        write(chalk.green("Adding new note"));
        // write(chalk.green("Title: ", argv.title));
        // write(chalk.green("Body: ", argv.body));
        if (notes.addNote(argv.title, argv.body)) {
            write(chalk.green.inverse(argv.title + " was added"))
        } else {
            write(chalk.red.inverse("Note already exists"))
        }
    }
})

yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        write(chalk.red("Removing a note"));
        if (notes.removeNote(argv.title)) {
            write(chalk.green.inverse(argv.title + " was removed"))
        } else {
            write(chalk.red.inverse("No such note found"))
        }
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        write(chalk.yellow("Listing notes..."));
        notes.listNotes();
    }
})

yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        write(chalk.magenta("Reading a note ..."));
        let foundNotes = notes.readNote(argv.title);
        if (foundNotes.length > 0) {
            // foundNotes.forEach(element => write(chalk.yellow.inverse(element)));
            for (let it of foundNotes) {
                write(chalk.yellow.inverse(it.title));
                write(chalk.yellow.inverse(it.body));
            }
        } else {
            write(chalk.red.inverse("Nothing found"));
        }
    }
})

// write(yargs.argv);
yargs.parse();
// notes.addNote("adding note");
// console.log(notes.getNotes());
// console.log(process)
