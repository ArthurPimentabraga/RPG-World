const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

// Routes
app.use(routes);

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server
app.listen(8080, (error) => {
    if (error) {
        console.log("Error when starding the server! :(");
    }
    else{
        console.log("Server started successfully! :)");
    }
})