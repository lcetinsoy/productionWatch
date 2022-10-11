const mysql = require('mysql2')

function createConnection(user, password, database){
    
    let dbConfig = {
        user:user,
        password: password,
        database:database
    }

    let connection = mysql.createConnection(dbConfig)
    return connection
}

function getUsers(connection, userId, functionToCallWhenDone){

    connection.query(
        //"SELECT * FROM user WHERE id=" + userId, 
        //`SELECT * FROM user WHERE id=${userId}`
       //NVER DO LIKE THAT : SECURITY RISK : 
       //SQL INJECTION
       "SELECT * FROM user WHERE id = ?",
       [userId],
        functionToCallWhenDone
    )
}

function getUserCount(callback){

    connection.query(
        //"SELECT * FROM user WHERE id=" + userId, 
        //`SELECT * FROM user WHERE id=${userId}`
    //NVER DO LIKE THAT : SECURITY RISK : 
    //SQL INJECTION
    "SELECT count(*) as nUser FROM user", callback)
}


function insertUser(connection, 
                    userData, 
                    functionToCallWhenDone
){

    connection.query(
       "INSERT INTO user (email, ville) VALUES (?, ?)",
       [userData.email, userData.ville], //as many values as ? in the query
        functionToCallWhenDone
    )
}


module.exports = {
    createConnection: createConnection,
    insertUser: insertUser,
    getUsers: getUsers
}