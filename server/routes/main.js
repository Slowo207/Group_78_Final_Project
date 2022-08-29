const e = require('express')
var dBSp = require('../db/database')

module.exports = function(app) {

    let primary = 0
    let level = 0

    let grade = 0
    let game = 0

    app.get("/",function(req, res){
        res.render("index.html", {
            title: "Dynamic title"
        });
    });
    app.get("/grades",function(req, res){
        res.render("grades.html", {
            title: "Dynamic title"
        });
    });
    app.get("/gameslideshow",function(req, res){
        res.render("gameslideshow.html", {
            title: "Dynamic title"
        });
    });
    app.get("/levels",function(req, res){
        primary = 1
        res.render("levels.html", {
            title: "Dynamic title"
        });
    });

    app.get("/g1gamehostingp1",function(req, res){
        primary = 1
        res.render("g1gamehostingp1.html", {
            title: "Dynamic title"
        });
    });
    app.get("/g1gamehostingp2",function(req, res){
        primary = 1
        res.render("g1gamehostingp2.html", {
            title: "Dynamic title"
        });
    });
    app.get("/g1gamehostingp3",function(req, res){
        primary = 1
        res.render("g1gamehostingp2.html", {
            title: "Dynamic title"
        });
    });

    app.get("/g2gamehostingp1",function(req, res){
        primary = 1
        res.render("g2gamehostingp1.html", {
            title: "Dynamic title"
        });
    });
    app.get("/g2gamehostingp2",function(req, res){
        primary = 1
        res.render("g2gamehostingp2.html", {
            title: "Dynamic title"
        });
    });
    app.get("/g2gamehostingp3",function(req, res){
        primary = 1
        res.render("g2gamehostingp3.html", {
            title: "Dynamic title"
        });
    });

    app.get("/g3gamehosting",function(req, res){
        primary = 1
        game = 3 
        grade = 1
        res.render("g3gamehosting.html", {
            title: "Dynamic title"
        });
    });

    app.get("/about",function(req, res){
        res.render("about.html", {
            title: "Dynamic title"
        });
    });

    app.get("/scoreboard",function(req, res){
        databaseName = "g" + req.body.game + "p" + req.body.grade
        db = dBSp.opendb(databaseName)
        console.log(db)
        rows = dBSp.queryEntrys(db, databaseName)
        console.log(rows)

        res.render("scoreBoard.html", {
            title: "Dynamic title",
            rows: rows
        });
        dBSp.closedb(db)
    });

    app.post("/addEntry", function(req, res){
        // if(req.body.game == 3){
        //     res.redirect("g" + req.body.game + "gamehosting")
        // }else{
        //     res.redirect("g" + req.body.game + "gamehosting" + req.body.grade + ".html")
        // }
        console.log('hello')
        // databaseName = "g" + req.body.game + "p" + req.body.grade
        // db = dBSp.opendb(databaseName)

        // dBSp.createdb(db, databaseName)

        // dBSp.closedb(db)

        res.redirect("scoreBoard")

    })
}