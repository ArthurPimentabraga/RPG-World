
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('userName').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('password').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('users');
