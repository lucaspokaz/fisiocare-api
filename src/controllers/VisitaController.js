const service = require('../services/VisitaService');

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
        id_empresa: global.id_empresa,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        email: req.body.email,
        senha: req.body.senha,
        ind_newsletter: req.body.ind_newsletter,
        situacao: req.body.situacao,
        ind_confiavel: req.body.ind_confiavel
    }

    let json = await service.insert(data);
    res.send(json);
};

exports.edit = async (req, res, next) => {
    let { id } = req.params;
    data = {
        id_empresa: global.id_empresa,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        email: req.body.email,
        senha: req.body.senha,
        ind_newsletter: req.body.ind_newsletter,
        situacao: req.body.situacao,
        ind_confiavel: req.body.ind_confiavel
    }
    let json = await service.edit(id, data);
    res.send(json);
};

exports.delete = async (req, res, next) => {
    let { id } = req.params;
    let json = await service.delete(id);
    res.send(json);
};