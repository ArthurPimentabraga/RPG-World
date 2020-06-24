const knex = require('../database/index');
const bcrypt = require('bcrypt');

module.exports = {
    async show(req, res){
        const results = await knex('users');
        return res.json(results)
    },

    async create(req, res, next){
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
    }
}