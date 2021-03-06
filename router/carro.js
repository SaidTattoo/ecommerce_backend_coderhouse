const { Router } = require('express');
const { listarCarroController,agregarCarroController,eliminarCarroController} = require('../controller/carro')
const router = Router();

router.get('/listar', listarCarroController)
router.put('/agregar/:id', agregarCarroController )
router.delete('/eliminar/:id', eliminarCarroController)

module.exports = router