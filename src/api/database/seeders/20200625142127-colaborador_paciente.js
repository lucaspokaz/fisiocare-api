module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('colaborador_paciente',
  [
    {
      id_paciente: 1,
      id_colaborador: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('colaborador_paciente', null, {}),
};
