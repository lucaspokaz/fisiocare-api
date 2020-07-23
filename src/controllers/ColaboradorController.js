const service = require('../services/ColaboradorService');

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

    // Object.keys(data).forEach(key => {
    //     console.log(data[key]);
    // });

    data = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        rg: req.body.rg,
        cpf: req.body.cpf,
        celular: req.body.cpf,
        profissao: req.body.profissao,
        especialidade: req.body.especialidade,
        status: req.body.status,
        login: req.body.login,
        senha: req.body.senha,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
    }

    let json = await service.insert(data);
    res.send(json);
};

exports.edit = async (req, res, next) => {
    let { id } = req.params;
    data = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        rg: req.body.rg,
        cpf: req.body.cpf,
        celular: req.body.cpf,
        profissao: req.body.profissao,
        especialidade: req.body.especialidade,
        status: req.body.status,
        login: req.body.login,
        senha: req.body.senha,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
    }
    let json = await service.edit(id, data);
    res.send(json);
};

exports.delete = async (req, res, next) => {
    let { id } = req.params;
    let json = await service.delete(id);
    res.send(json);
};