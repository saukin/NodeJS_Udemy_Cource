const fs = require('fs')

// const book = {
//     title: 'favorite book',
//     author: 'favorite author'
// }

// let strBook = JSON.stringify(book);
// console.log(strBook);

// let jsonBook = JSON.parse(strBook)
// console.log(jsonBook)

// fs.writeFileSync('./1-json.json', strBook)

let buff = fs.readFileSync('./1-json.json');
// console.log(buff.toString());
let buffObj = JSON.parse(buff)

buffObj.title = "Norwegian wood"
buffObj.author = "Haruki Murakami"

fs.writeFileSync('1-json.json', JSON.stringify(buffObj))
