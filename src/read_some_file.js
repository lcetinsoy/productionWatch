const fs = require('fs').promises //available in node without installation

async function lala(){
    console.log("line 3")
    let result =  await fs.readFile("src/data.txt", "utf8")
    return result
}

lala().then(e => console.log(e))