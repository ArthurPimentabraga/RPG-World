const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

// Session
app.use(session({
    secret: "aksfjh564sdg45ad4sfadsg", cookie: { maxAge: 36000000 }
}));

// Controllers
const UserController = require('./controllers/UserController')

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.use("/", UserController);

// Server
app.listen(3000, (error) => {
    if (error) {
        console.log("Error when starding the server! :(");
    }
    else{
        console.log("Server started successfully! :)");
    }
})