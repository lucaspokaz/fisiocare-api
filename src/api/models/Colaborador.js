// https://sequelize.org/master/manual/validations-and-constraints.html

const { Model, DataTypes } = require('sequelize');

class Colaborador extends Model {

  static init(sequelize) {
    super.init({
      id_colaborador: {
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
      rg: DataTypes.STRING(20),
      cpf: DataTypes.STRING(14),
      celular: DataTypes.STRING(20),
      profissao: DataTypes.STRING(50),
      especialidade: DataTypes.STRING(50),
      status: DataTypes.CHAR(1),
      login: DataTypes.STRING(50),
      senha: DataTypes.STRING(50),
      cep: DataTypes.STRING(10),
      rua: DataTypes.STRING(150),
      numero: DataTypes.STRING(10),
      complemento: DataTypes.STRING(200),
      bairro: DataTypes.STRING(100),
      cidade: DataTypes.STRING(150),
      estado: DataTypes.STRING(50),
    }, {
      sequelize,
      tableName: 'colaborador',
    });
  }

  static associate(models) {
    this.hasMany(models.ColaboradorPaciente, { foreignKey: 'id_colaborador', as: 'colaborador_paciente' }),
    this.hasMany(models.Visita, { foreignKey: 'id_colaborador', as: 'visita' })
  }
}

module.exports = Colaborador;