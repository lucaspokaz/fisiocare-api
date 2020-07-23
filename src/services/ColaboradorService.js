const Sequelize = require('sequelize');
const Colaborador = require('../api/models/Colaborador');

exports.findById = async (id) => {

  try {
    let entidade = await Colaborador.findByPk(id, {
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
    return {
      status: 200,
      retorno: await Colaborador.findAll({
        include: { association: 'colaborador_paciente' }
      }),
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
      retorno: await Colaborador.create(data),
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
    let entidade = await Colaborador.findByPk(id);

    if (!entidade) {
      throw ('Colaborador não encontrado');
    }

    entidade = await Colaborador.update(data, {
      where: {
        id_colaborador: id,
      }
    });

    return {
      status: 200,
      retorno: await Colaborador.findByPk(id),
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
    let entidade = await Colaborador.findByPk(id);

    if (!entidade) {
      throw ('Colaborador não encontrado');
    }

    return {
      status: 200,
      retorno: await Colaborador.destroy({
        where: { id_colaborador: id }
      }),
      mensagem: 'Atualizado com sucesso'
    }
  } catch (error) {
    return {
      status: 500,
      result: [],
      mensagem: error
    }
  }
}