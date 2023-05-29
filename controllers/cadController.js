const cadModel = require('../models/cadModel')

class CadController{
    async salvar(req, res){
        let assinante = req.body;
        const max = awaitModel.findOne({}).sort({codigo: -1})
        assinante.id = max == null ? 1 : max.id+1
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
    async atualizar(req, res){
        const id = req.params.id
        const_id = String((await cadModel.findOne({'id': id}))._id)
        await cadModel.findByIdAndUpdate(String(_id), req.body)
        res.status(200).send()
    }
    async excluir (req, res){
        const id = req.params.id
        const _id = String((await cadModel.findOne({'id': id}))._id)
        await cadModel.findByIdAndRemove(String(_id))
        res.status(200).send()
    }
}

module.exports = new CadController()