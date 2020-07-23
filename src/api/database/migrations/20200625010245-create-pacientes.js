// sequelize migration:create --name=create-pacientes

const { Model, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('paciente', {
      id_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_nascimento: DataTypes.DATEONLY,
      sexo: DataTypes.CHAR(1),
      telefone1: DataTypes.STRING(20),
      telefone2: DataTypes.STRING(20),
      diagnostico: DataTypes.TEXT,
      cep: DataTypes.STRING(10),
      rua: DataTypes.STRING(150),
      numero: DataTypes.STRING(10),
      complemento: DataTypes.STRING(200),
      bairro: DataTypes.STRING(100),
      cidade: DataTypes.STRING(150),
      estado: DataTypes.STRING(50),
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
    await queryInterface.dropTable('paciente');
  }
};
