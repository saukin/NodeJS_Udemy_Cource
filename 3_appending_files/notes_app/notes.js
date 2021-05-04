const fs = require('fs')
const notes = {
    loadNotes() {
        try {
            const data = fs.readFileSync('notes.json');
            const dataStr = data.toString();
            return JSON.parse(dataStr);
        } catch (e) {
            return [];
        }
    },

    saveNotes(notes) {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
    },

    addNote(title, body) {
        // notes.push(note);
        const notesList = this.loadNotes();
        const dupNote = notesList.find((note) => note.title === title)
        if (!dupNote) {
            notesList.push({
                title: title,
                body: body
            })
        }
        this.saveNotes(notesList);
        return !dupNote
    },

    readNote(title) {
        const notesList = this.loadNotes();
        let a = notesList.filter((note) => note.title === title);
        // console.log(a);
        return a;
    },

    listNotes() {
        console.log(this.loadNotes());
    },

    removeNote(title) {
        let notesList = this.loadNotes();
        const arrayToSave = notesList.filter(note => note.title !== title)
        this.saveNotes(arrayToSave);
        return notesList.length !== arrayToSave.length
    }
}
module.exports = notes