const service = require('../services/PacienteService');

exports.list = async (req, res, next) => {
    let json = await service.getAll();
    console.log(json);
    res.send(json);
};

exports.get_id = async (req, res, next) => {
    let json = await service.findById(req.params.id);
    console.log(json);
    res.send(json);
};

exports.create = async (req, res, next) => {

    data = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        sexo: req.body.sexo,
        telefone1: req.body.telefone1,
        telefone2: req.body.telefone2,
        diagnostico: req.body.diagnostico,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
    }

    let json = await service.insert(data);
    res.send(json);
};

exports.edit = async (req, res, next) => {
    let { id } = req.params;
    data = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        sexo: req.body.sexo,
        telefone1: req.body.telefone1,
        telefone2: req.body.telefone2,
        diagnostico: req.body.diagnostico,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
    }
    let json = await service.edit(id, data);
    res.send(json);
};

exports.delete = async (req, res, next) => {
    let { id } = req.params;
    let json = await service.delete(id);
    res.send(json);
};