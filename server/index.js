const express = require ("express");
const path = require("path")
var sqlite3 = require("sqlite3").verbose()
const bodyParser = require("body-parser")

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}))


require("./routes/main")(app);

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.engine("html", require("ejs").renderFile);

app.all('/*', (req, res) => {
    res.status(404).send("<h1> Error 404: page not found </h1> ")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));