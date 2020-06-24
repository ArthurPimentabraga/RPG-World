
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { userName: 'Arthur', email: 'pimentabraga2@gmail.com', password: '135531Aa' }
      ]);
    });
};
