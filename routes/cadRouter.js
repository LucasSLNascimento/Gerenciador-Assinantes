var express = require('express');
var router = express.Router();
const cadController = require('../controllers/cadController')

const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

//crud básico

router.get('/', cadController.listar)
router.get('/:id', cadController.buscarPorId)
router.post('/', upload.single('Foto'), cadController.salvar)
router.put('/:id', upload.single('Foto'), cadController.atualizar)
router.delete('/:id', cadController.excluir)

//Buscas extras

router.get('/nome/:Nome', cadController.buscarPorNome)
router.get('/sobrenome/:Sobrenome', cadController.buscarPorSobrenome)
router.get('/cidade/:Cidade', cadController.buscarPorCidade)
router.get('/estado/:Estado', cadController.buscarPorEstado)
router.get('/status/:Status', cadController.buscarPorStatus)


module.exports = router
