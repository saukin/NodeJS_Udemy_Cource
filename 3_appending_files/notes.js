let notes = [];




const addNote = function(note) {
    notes.push(note);
}

const readNote = function(noteTitle) {
    return notes[noteTitle];
}

const getNotes = function() {
    return notes;
}

module.exports = getNotes, addNote, readNote