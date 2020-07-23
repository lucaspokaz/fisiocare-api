module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('colaborador',
  [
    {
      nome: 'Colaborador 1',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nome: 'Colaborador 2',
      created_at: new Date(),
      updated_at: new Date()
    }
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('colaborador', null, {}),
};
