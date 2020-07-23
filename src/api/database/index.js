const Sequelize = require("sequelize");
const connection_config = require("../../config/sequelize_config");

const Paciente = require('../models/Paciente');
const Colaborador = require('../models/Colaborador');
const ColaboradorPaciente = require('../models/ColaboradorPaciente');
const Visita = require('../models/Visita');

const connection = new Sequelize(connection_config);

// Inicilizações
Paciente.init(connection);
Colaborador.init(connection);
ColaboradorPaciente.init(connection);
Visita.init(connection);

// Associações
Paciente.associate(connection.models);
Colaborador.associate(connection.models);
Visita.associate(connection.models);

module.exports = connection;