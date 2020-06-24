const knexfile = require('@root/knexfile');
const knex = require('knex')(knexfile.development);

module.exports = knex;