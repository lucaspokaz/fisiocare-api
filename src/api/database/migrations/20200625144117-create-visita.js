const { Model, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('visita', {
      id_visita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'paciente',
          key: 'id_paciente'
        }
      },
      id_colaborador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'colaborador',
          key: 'id_colaborador'
        }
      },
      data_entrada: DataTypes.DATE,
      data_saida: DataTypes.DATE,
      avaliacao: DataTypes.TEXT,
      evolucao: DataTypes.TEXT,
      created_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('visita');
  }
};
