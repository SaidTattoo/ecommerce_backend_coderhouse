const { Router } = require('express');
const { productoController, buscarPorIdController, eliminarController, editarController, guardarController } = require('../controller/producto');
const router = Router();

router.get('/', productoController)

router.get('/listar/:id', buscarPorIdController)

router.post('/guardar', guardarController)

router.put('/editar/:id', editarController)

router.delete('/eliminar/:id', eliminarController)

module.exports = router