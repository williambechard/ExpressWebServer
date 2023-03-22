const express = require('express')
const livereload = require('livereload')
const path = require('path')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
const jsonParser = bodyParser.json()


if (app.get("env") === "development") {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.watch(path.join(__dirname, "public"));

    app.use(require("connect-livereload")());

    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
}
app.use(express.static('public'))

app.get("/form", (req, res)=>{
    res.send("OK");
    console.log(req, res);
})
app.post("/form",  jsonParser, (req, res)=>{
    res.send("Post request Called");
    console.log(req.body);
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})