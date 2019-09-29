const getNotes = require ('/Users/zacharycohen/Desktop/Node-Camp/notes.js')
const chalk = require('chalk');
const log = console.log;
const msg = getNotes();

console.log(msg);

log(chalk.blue.inverse.bold('Success!'))
