const express = require('express');
const router = express.Router();

// Controllers
const UserController = require('./controllers/UserController');

// Routes
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', UserController.login);
router.get('/register', UserController.register);

module.exports = router;