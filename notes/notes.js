const fs = require('fs')

const getNote = function () {
  return notes[0] = "this note"
}

const getNotes = function () {
  return loadNoteFile()
}

const addNote = function (title, desc) {
  const notes = loadNoteFile()

  const isExist = false

  notes.forEach(note => {
    if (note.title === title) {
      isExist = true
    }
  });

  if (!isExist) {
    notes.push({
      title: title,
      description: desc
    })
    saveNotes(notes)
  }
}

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJson)
}

const deleteNote = function (title) {
  const notes = loadNoteFile()
  notes.forEach(note => {
    console.log(note)


    if (note.title === title) {
      notes.pop(note)
      console.log("true")
      return
    }
  });

  saveNotes(notes)
  console.log(notes)
}

const updateNote = function () {
  return note[0] = "this note"
}

const loadNoteFile = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString
    return JSON.parse(dataJson)
  } catch(e) {
    return []
  }
  
}

module.exports = {
  getNote: getNote,
  getNotes: getNotes,
  addNote: addNote,
  deleteNote: deleteNote,
  updateNote: updateNote
}