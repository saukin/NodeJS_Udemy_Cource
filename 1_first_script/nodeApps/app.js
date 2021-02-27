const fs = require('fs')

//fs.writeFileSync('notes.txt', 'SEcond line')

fs.appendFileSync('notes.txt', "\nAppended line")