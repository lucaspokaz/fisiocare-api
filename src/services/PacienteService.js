const Sequelize = require('sequelize');
const Paciente = require('../api/models/Paciente');
const moment = require('moment');

exports.findById = async (id) => {

  try {
    let entidade = await Paciente.findByPk(id, {
      include: { association: 'visita' }
    });
    return {
      status: 200,
      retorno: entidade,
      mensagem: ''
    }
  } catch (error) {
    return {
      status: 500,
      result: [],
      mensagem: error.message
    }
  }
}

exports.getAll = async () => {

  try {

    let pacientes = await Paciente.findAll();

    pacientes.forEach(item => {
      let nasc = moment(item.data_nascimento);
			let depois = moment(new Date());
      item.setDataValue('idade', depois.diff(nasc, 'years'));
		});

    return {
      status: 200,
      retorno: pacientes,
      mensagem: ''
    }

  } catch (error) {
    return {
      status: 500,
      result: [],
      mensagem: error.message
    }
  }
}

exports.insert = async (data) => {

  try {
    return {
      status: 200,
      retorno: await Paciente.create(data),
      mensagem: 'Criado com sucesso'
    }

  } catch (error) {
    return {
      status: 500,
      result: [],
      mensagem: error.message
    }
  }
}

exports.edit = async (id, data) => {

  try {
    let entidade = await Paciente.findByPk(id);

    if (!entidade) {
      throw ('Paciente não encontrado');
    }

    entidade = await Paciente.update(data, {
      where: {
        id_paciente: id,
      }
    });

    return {
      status: 200,
      retorno: await Paciente.findByPk(id),
      mensagem: 'Atualizado com sucesso'
    }
  } catch (error) {
    return {
      status: 500,
      result: [],
      mensagem: error.message
    }
  }
}

exports.delete = async (id) => {

  try {
    let entidade = await Paciente.findByPk(id);

    if (!entidade) {
      throw ('Paciente não encontrado');
    }

    return {
      status: 200,
      retorno: await Paciente.destroy({
        where: { id_paciente: id }
      }),
      mensagem: 'Removido com sucesso'
    }
  } catch (error) {
    return {
      status: 500,
      result: [],
      mensagem: error
    }
  }
}