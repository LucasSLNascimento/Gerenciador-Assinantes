const cadModel = require('../models/cadModel')

class CadController {
    async salvar(req, res) {
        let assinante = req.body;
        const max = await cadModel.findOne({}).sort({ id: -1 })
        assinante.id = max == null ? 1 : max.id + 1
        const resultado = await cadModel.create(assinante)
        res.status(201).json(resultado)
    }
    async listar(req, res) {
        const resultado = await cadModel.find({});
        res.status(200).json(resultado);
    }
    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await cadModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }
    async buscarPorNome(req, res) {
        const Nome = req.params.Nome;
        const resultado = await cadModel.find({ 'Nome': Nome })
        res.status(200).json(resultado)

    }
    async buscarPorSobrenome(req, res) {
        const Sobrenome = req.params.Sobrenome;
        const resultado = await cadModel.find({ 'Sobrenome': Sobrenome })
        res.status(200).json(resultado)
    }
    async buscarPorCidade(req, res) {
        const Cidade = req.params.Cidade;
        const resultado = await cadModel.find({ 'Cidade': Cidade })
        res.status(200).json(resultado)
    }
    async buscarPorEstado(req, res) {
        const Estado = req.params.Estado;
        const resultado = await cadModel.find({ 'Estado': Estado })
        res.status(200).json(resultado)
    }

    async buscarPorStatus(req, res) {
        const Status = req.params.Status
        const resultado = await cadModel.find({ 'Status': Status })
        res.status(200).json(resultado)
    }

    async atualizar(req, res) {
        const id = req.params.id
        const _id = String((await cadModel.findOne({ 'id': id }))._id)
        await cadModel.findByIdAndUpdate(String(_id), req.body)
        res.status(200).send()
    }
    async excluir(req, res) {
        const id = req.params.id
        const _id = String((await cadModel.findOne({ 'id': id }))._id)
        await cadModel.findByIdAndRemove(String(_id))
        res.status(200).send()
    }
}

module.exports = new CadController()



//Descartados

    /*
     async buscarPorStatus(req, res) {
        const Status = req.params.Status
        if(Status == 'ativo'){
            const resultado = await cadModel.find({'Status': true})
            res.status(200).json(resultado)
        }else if(Status == 'inativo'){
            const resultado = await cadModel.find({'Status': false})
            res.status(200).json(resultado)
        }
    }
    */