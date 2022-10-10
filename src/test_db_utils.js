let dbutils = require("./db_utils")

function testSelecUser(){

    let userId = 1
    let connection = dbutils.createConnection("root", "root", "manofy")
    
    dbutils.getUsers(connection, userId, (err, data) => {

        if (data.length === 0){
            console.log("euh, il devrait y avoir des données")
        }
        console.log(data)
        connection.end()

    })
}


function testInsertUser(){

    let userId = 1
    let connection = dbutils.createConnection("root", "root", "manofy")
    
    let user = {
        email: "lala@loulila.fr",
        ville:"paris"
    }

    dbutils.insertUser(connection, user, (err, data) => {

        if (err){
            console.log(err)
        }
        else{
            console.log(data)
        }

        connection.end()

    })

}
testInsertUser()
//testSelecUser()