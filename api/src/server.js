const express = require('express');
const app = express();
require('module-alias/register');
const routes = require('./routes');

app.use(express.json());
app.use(routes);

//Catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message })
})

app.listen(8080, (erro) => {
    if(erro){
        console.log("Error where starded the server! :(");
        console.log(erro);
    }
    else{
        console.log("Server started successful! :)");
    }
})
