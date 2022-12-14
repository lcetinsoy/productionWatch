const fs = require('fs') //available in node without installation

function processFileContent(err, fileContent){
    if (err){
        console.error(err)
        return
    }
    console.log(typeof fileContent, fileContent)
}

// string, function ->   readFile -> Nothing
fs.readFile(
    "src/data.txt",
    "utf8",
    // second parameter: Function
    processFileContent
)

