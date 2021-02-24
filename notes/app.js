// import validator from 'validator.js';
const validator = require('validator');
const utils = require('utils');
const notes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.0.3')

yargs.command({
  command: 'add',
  description: 'To add a new post',
  builder: {
    title: {
      description: 'Post Title',
      demandOption: true,
      type: 'string'
    },
    desc: {
      describe: '<div><h1>Hellio</h1></div>',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.desc)
  }
})


yargs.command( {
  command: 'delete',
  description: 'To remove a post',
  builder: {
    title: {
      description: 'Post Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.deleteNote(argv.title)
  }

})

yargs.command( {
  command: 'read',
  description: 'To read a post',
  builder: {
    title: {
      description: 'Post Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('post postpost postpost postpost postpost postpost post', argv)
  }

})

yargs.command( {
  command: 'lsit',
  description: 'To list a post',
  builder: {
    title: {
      description: 'Post Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('list post', argv)
  }

})  

yargs.parse()