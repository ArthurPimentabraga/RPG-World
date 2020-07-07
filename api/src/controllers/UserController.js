const knex = require('../database/index');
const bcrypt = require('bcrypt');

module.exports = {
    async show(req, res) {
        const results = await knex('users');
        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { userName, email, password } = req.body;

            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);

            await knex('users').insert({
                userName: userName,
                email: email,
                password: hash
            });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async login(req, res) {
        let { email, password } = req.body; // header
        let user = await knex('users').where({ email: email });

        if (user.length > 0) {
            return res.status(200).send();
        }
        else{
            return res.status(401).send('User not found');
        }
    }
}