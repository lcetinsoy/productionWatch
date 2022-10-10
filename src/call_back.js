const { readFile } = require("fs");

readFile("src/data.txt", "utf8", (err, data) => {
    let url = "google.com/data"
    
    fetch(url).then(response => {

        mysql.query("insert blabla", (error, result) => {

            console.log(result)

        })
    })
})