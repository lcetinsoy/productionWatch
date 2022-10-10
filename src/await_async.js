let fs = require('fs').promises

async function loadData(){

    let data = await fs.readFile('src/data.txt', 'utf8')

    return data
}

console.log("ligne 11")
let output = loadData()
console.log("ligne 12")