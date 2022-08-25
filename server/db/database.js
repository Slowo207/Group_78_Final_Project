const sqlite3 = require("sqlite3").verbose()

const sql = 'INSERT INTO users (id)'

module.exports = {
    opendb: function(databaseName){
        var db = new sqlite3.Database("./db/dataBases/"+ databaseName + ".db", sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                return console.error(err.message)
            }
            console.log("Connection successful to " + databaseName + " database")
            return db
        })
    },

    closedb: function(db){
        db.close((err) => {
            if (err){
                return console.error(err.message)
            }
            console.log("db closed")
        })
    },

    createdb: function(databaseName, sql){

    },

    dropdb: function(databaseName){

    },

    addEntry: function(databaseName, sql){

    },

    removeEntry: function(databaseName, sql){

    },

    queryEntrys: function(databaseName, sql){

    }
}


// function createdb(databaseName, sql){

// }

// function dropdb(){

// }

// function addEntry(){

// }

// function removeEntry(){

// }

// function queryEntrys(){

// }