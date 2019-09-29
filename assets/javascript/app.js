
const chalk = require('chalk');
const yargs = require("yargs");
const getNotes = require ('/Users/zacharycohen/Desktop/Node-Camp/notes.js');

const log = console.log;

yargs.version('1.1.0')

yargs.command({
  command:'add',
  describe: "Add a new note",
  builder:{
    title: {
      describe: 'Note title',
      // demandOption: true,
      // type:'string'
    },
    body:{
      describe: "note body",
      demandOption:true,
      type:"string"
    }
  },
  handler: function(argv){
    log('Title: ' + argv.title)
    log("body: " + argv.body)
  }
})

yargs.command({
  command:"remove",
  describe:"remove a note",
  handler: function(){
    log("removing the note")
  }
})
yargs.command({
  command:"list",
  describe:"shows list",
  handler: function(){
    log("listing all notes")
  }
})
yargs.command({
  command: "read",
  describe: "reads the list",
  handler: function(){
    log('reading a note');
  }
})





log(yargs.argv);
