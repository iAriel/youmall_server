const Bcrypt = require('bcryptjs');

exports.seed = async (knex) => {
  return knex('users').insert([
    {
      fullname: 'Matheus Maximiano de Melo Vieira',
      username: 'Matheus Max',
      email: 'matheus@email.com',
      password: await Bcrypt.hash('123456789', 12),
      cpf: '123.456.789-10',
      isAdmin: true,
    },
  ]);
};
