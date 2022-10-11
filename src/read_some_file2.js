const fs = require('fs') //available in node without installation

const processFileContent = (err, fileContent) => {
    if (err){
        console.log(err)
        return
    }
    //content of the function
    console.log(fileContent)
}

// string, function ->   readFile -> Nothing
fs.readFile(
    "src/data.txt",
    "utf8",
    // second parameter: Function
    processFileContent
)

