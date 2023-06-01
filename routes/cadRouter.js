var express = require('express');
var router = express.Router();
const cadController = require('../controllers/cadController')

const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.get('/', cadController.listar)
router.post('/', upload.single('Foto'), cadController.salvar)
router.get('/:id', cadController.buscarPorId)
router.get('/nome/:Nome', cadController.buscarPorNome)
router.get('/sobrenome/:Sobrenome', cadController.buscarPorSobrenome)
router.get('/cidade/:Cidade', cadController.buscarPorCidade)
router.get('/estado/:Estado', cadController.buscarPorEstado)
router.get('/status/:Status', cadController.buscarPorStatus)
router.put('/:id', upload.single('Foto'), cadController.atualizar)
router.delete('/:id', cadController.excluir)

module.exports = router
