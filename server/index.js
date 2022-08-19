const express = require ("express");
const path = require("path")
const app = express();
const port = 8080;

require("./routes/main")(app);

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.engine("html", require("ejs").renderFile);

app.all('/*', (req, res) => {
    res.status(404).send("<h1> Error 404: page not found </h1> ")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));