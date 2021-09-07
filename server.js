const express = require('express');
const cors = require("cors")
const dotenv = require("dotenv")
const compression = require("compression");

const app = express();
const superRoutes = require("./router/index")
const { getConnection } = require('./model/db');

/**
 * middlewares
 */

app.use(compression())
app.use(express.json())
app.use(cors())

/**
 * db y server start
 */

app.use("/api", superRoutes )

getConnection().then((message) => {
    console.log(message);
    app.listen(8080, function () {
        console.log("servidor corriendo en en http://localhost:" + 8080);
    });
    app.on("error", function (error) { return console.log("error en el servidor " + error); });
    
}).catch(e => console.log(e))