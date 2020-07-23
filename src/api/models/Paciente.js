// https://sequelize.org/master/manual/validations-and-constraints.html

const { Model, DataTypes } = require('sequelize');

class Paciente extends Model {

  static init(sequelize) {
    super.init({
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
    }, {
      sequelize,
      tableName: 'paciente',
    });
  }

  static associate(models) {
    this.hasMany(models.ColaboradorPaciente, { foreignKey: 'id_paciente', as: 'colaborador_paciente' }),
    this.hasMany(models.Visita, { foreignKey: 'id_paciente', as: 'visita' })
  }
}

module.exports = Paciente;