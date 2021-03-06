const express = require('express');
const routes = express.Router();

//Controllers
const UserController = require('./controllers/UserController')

//Routes
//User
routes.get('/user', UserController.show);
routes.post('/user', UserController.create);
routes.post('/user/login', UserController.login);

module.exports = routes;