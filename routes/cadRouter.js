var express = require('express');
var router = express.Router();
const cadController = require('../controllers/cadController')

router.get('/', cadController.listar)
router.post('/', cadController.salvar)
router.get('/:id', cadController.buscarPorId)
router.put('/:id', cadController.atualizar)
router.delete('/:id', cadController.excluir)

module.exports = router
