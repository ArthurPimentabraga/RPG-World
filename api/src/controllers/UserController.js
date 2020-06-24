const knex = require('../database/index');

module.exports = {
    async show(req, res){
        const results = await knex('users');
        return res.json(results)
    },

    async create(req, res, next){
        try {
            const user = { userName, email, password } = req.body;
            await knex('users').insert(user);
            return res.status(201).send();        
        } catch (error) {
            next(error);
        }
    }
}