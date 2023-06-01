const cadModel = require('../models/cadModel')

class CadController {
    async salvar(req, res) {
        try {
            let assinante = req.body;
            const max = await cadModel.findOne({}).sort({ id: -1 })
            assinante.id = max == null ? 1 : max.id + 1

            if (req.file) {
                const imagemBuffer = req.file.buffer
                const imagemBase64 = imagemBuffer.toString('base64')
                assinante.Foto = imagemBase64
            }

            const resultado = await cadModel.create(assinante)
            res.status(201).json(resultado)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao salvar este assinante' });
        }
    }
    async listar(req, res) {
        try {
            const resultado = await cadModel.find({});
            res.status(200).json(resultado);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao listar os assinantes' });
        }
    }
    async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const resultado = await cadModel.findOne({ 'id': id });
            res.status(200).json(resultado);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao realizar busca por id' });
        }
    }
    async buscarPorNome(req, res) {
        try {
            const Nome = req.params.Nome;
            const resultado = await cadModel.find({ 'Nome': Nome })
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao realizar busca por nome' });
        }
    }
    async buscarPorSobrenome(req, res) {
        try {
            const Sobrenome = req.params.Sobrenome;
            const resultado = await cadModel.find({ 'Sobrenome': Sobrenome })
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao realizar busca por sobrenome' });
        }
    }
    async buscarPorCidade(req, res) {

        try {
            const Cidade = req.params.Cidade;
            const resultado = await cadModel.find({ 'Cidade': Cidade })
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao realizar busca por cidade' });
        }

    }
    async buscarPorEstado(req, res) {
        try {
            const Estado = req.params.Estado;
            const resultado = await cadModel.find({ 'Estado': Estado })
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao realizar busca por estado' });
        }

    }

    async buscarPorStatus(req, res) {
        try {
            const Status = req.params.Status
            const resultado = await cadModel.find({ 'Status': Status })
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao realizar busca por status' });
        }

    }

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const _id = String((await cadModel.findOne({ 'id': id }))._id)

            if (req.file) {
                const imagemBuffer = req.file.buffer
                const imagemBase64 = imagemBuffer.toString('base64')
                req.body.Foto = imagemBase64
            }

            await cadModel.findByIdAndUpdate(String(_id), req.body)
            res.status(200).send()
        } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar este assinante' });
        }

    }
    async excluir(req, res) {
        try {
            const id = req.params.id
            const _id = String((await cadModel.findOne({ 'id': id }))._id)
            await cadModel.findByIdAndRemove(String(_id))
            res.status(200).send()
        } catch (err) {
            res.status(500).json({ error: 'Erro ao excluir este assinante' });
        }

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