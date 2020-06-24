// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: "rpgWorld",
      user: "root",
      password: "135531AA"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
