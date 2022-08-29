var dBSp = require('../../db/database')

function showDatabase(){
    databaseName = "g" + localStorage.getItem("game") + "p" + localStorage.getItem("grade")
    db = dBSp.opendb(databaseName)
    dBSp.closedb(db)
}