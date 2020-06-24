const express = require('express');
const routes = express.Router();
const axios = require('axios');

//Controllers
const UserController = require('./controllers/UserController')

//Routes
//User
routes.get('/user', UserController.show);
routes.post('/user', UserController.create);

module.exports = routes;
//axios.get('https://api.themoviedb.org/3/movie/550?api_key=4e795b5d0352f065c3b5f8bd2b1039fb')
  //  .then(res => {
    //    console.log(res.data);
   // })
    //.catch((error) => {
     //   console.log(error);
   // });