const sqlite3 = require("sqlite3").verbose()

module.exports = {
    opendb: function(databaseName){
        console.log("opendb")
        var db = new sqlite3.Database("./db/dataBases/"+ databaseName + ".db", sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                return console.error(err.message)
            }
            console.log("Connection successful to " + databaseName + " database")
        })
        return db
    },

    closedb: function(db){
        db.close((err) => {
            if (err){
                return console.error(err.message)
            }
            console.log("db closed")
        })
    },

    createdb: function(db, databaseName){
        db.run("CREATE TABLE IF NOT EXISTS" + databaseName + "(id INTEGER PRIMARY KEY AUTOINCREMENT, user_name, score, time)")
        console.log(databaseName + " created")
    },

    dropdb: function(databaseName){

    },

    addEntry: function(db, databaseName, user_name, score, time){
        let sql = "INSERT INTO " + databaseName + " (id, user_name, score, time) VALUES(?,?,?,?)"

        db.run(sql, [user_name, score, time])
    },

    removeEntry: function(databaseName, sql){

    },

    queryEntrys: function(db, databaseName){
        const entries = []
        const sql = 'SELECT * FROM' + databaseName

        db.all(sql, [], (err, rows) => {
            if (err){
                return console.error(err.message)
            }
            rows.forEach(element => {
                entries.push(row)
            });
        })
        return entries
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