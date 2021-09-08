const { listarProductosService, buscarPorIdService, editarService, eliminarService, guardarService, buscarService } = require("../services/producto")
const { success, error } = require("../utils/networks")

const productoController = async (req, res) => {
    let data = await listarProductosService()
    data ? success(req, res, data, 200) : error(req, res, "No existen productos", 400)
}

const buscarPorIdController = async (req, res) => {
    const { id } = req.params
    let data = await buscarPorIdService(id)
    data ? success(req, res, data, 200) : error(req, res, "No existe producto", 400)
}

const editarController = async (req, res) => {
    const { id } = req.params
    const { body } = req
    let data = await editarService(id, body)
    data ? success(req, res, data, 200) : error(req, res, "No existe producto", 400)
}

const eliminarController = async (req, res) => {
    const { id } = req.params
    let data = await eliminarService(id)
    data ? success(req, res, data, 200) : error(req, res, "No existe producto", 400)
}
const guardarController = async (req, res) => {
    const { body } = req
    let data = await guardarService(body) 
    data ? success(req, res, data, 200) : error(req, res, "No se guardo el producto", 400)
}

const buscarController = async (req, res ) => {
    const { nombre} = req.query
    await buscarService(nombre)
}

module.exports = {
    productoController,
    buscarPorIdController,
    editarController,
    eliminarController,
    guardarController, 
    buscarController
}