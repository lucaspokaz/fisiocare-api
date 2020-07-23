// https://sequelize.org/master/manual/validations-and-constraints.html

const { Model, DataTypes } = require('sequelize');

class ColaboradorPaciente extends Model {

  static init(sequelize) {
    super.init({
      id_colaborador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    }, {
      sequelize,
      tableName: 'colaborador_paciente',
    });
  }

  static associate(models) {
    this.belongsTo(models.Colaborador, { foreignKey: 'id_colaborador', as: 'colaborador' });
    this.belongsTo(models.Paciente, { foreignKey: 'id_paciente', as: 'paciente' });
  }
}

module.exports = ColaboradorPaciente;