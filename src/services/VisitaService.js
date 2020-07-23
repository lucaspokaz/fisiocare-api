const Sequelize = require('sequelize');
const Visita = require('../api/models/Visita');

exports.findById = async (id) => {

  try {
    let entidade = await Visita.findByPk(id, {
      include: [
        { association: 'paciente' },
        { association: 'colaborador' },
      ]
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
      retorno: await Visita.findAll(),
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
      retorno: await Visita.create(data),
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
    let entidade = await Visita.findByPk(id);

    if (!entidade) {
      throw ('Colaborador não encontrado');
    }

    entidade = await Visita.update(data, {
      where: {
        id_colaborador: id,
      }
    });

    return {
      status: 200,
      retorno: await Visita.findByPk(id),
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
    let entidade = await Visita.findByPk(id);

    if (!entidade) {
      throw ('Visita não encontrado');
    }

    return {
      status: 200,
      retorno: await Visita.destroy({
        where: { id_visita: id }
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