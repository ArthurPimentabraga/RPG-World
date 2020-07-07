const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/user/create', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pwd = req.body.pwd;

    axios.post('http://localhost:8080/user', {
        userName: name,
        email: email,
        password: pwd
    }).then(() => {
        res.redirect('/login');
    }).catch((error) => {
        console.log(error);
        res.redirect('/register');
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/authenticate', (req, res) => {
    
});

module.exports = router;