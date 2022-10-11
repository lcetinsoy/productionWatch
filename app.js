const express = require('express') 
const app = express()
const port = 3000

app.use(express.static("public")) //use static middle ware
//to serve files in the "public" folder


app.get("/user", (request, response) => {

    let data = {
        "firstname": "paul",
        "age": 22
    }

    response.json(data)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})