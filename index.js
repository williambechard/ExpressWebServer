const express = require('express')
const livereload = require('livereload')
const path = require('path')
const app = express()
const port = 3000


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
app.get('/', (req, res)=>{
    res.send('Hello World*')
})

app.get('/random', (req, res)=>{
    res.send('Random page-')
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})