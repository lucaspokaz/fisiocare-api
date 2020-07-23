// https://sequelize.org/master/manual/validations-and-constraints.html

const { Model, DataTypes } = require('sequelize');

class Visita extends Model {

  static init(sequelize) {
    super.init({
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
    }, {
      sequelize,
      tableName: 'visita',
    });
  }

  static associate(models) {
    this.belongsTo(models.Colaborador, { foreignKey: 'id_colaborador', as: 'colaborador' });
    this.belongsTo(models.Paciente, { foreignKey: 'id_paciente', as: 'paciente' });
  }
}

module.exports = Visita;