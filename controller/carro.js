const { listarCarroService, agregarCarroService, eliminarCarroService } = require("../services/carro")
const { success, error } = require("../utils/networks")
const listarCarroController = async (req, res) => {
    let data = await listarCarroService()
    success(req, res, data, 200)
}
const agregarCarroController = async (req, res) => {
    const { id } = req.params
    const { body } = req
    let data = await agregarCarroService(id, body)
    success(req, res, data, 200)
}
const eliminarCarroController = async (req, res) => {
    const { id } = req.params
    const { idProd } = req.body
    let data = await eliminarCarroService(id, idProd)
    success(req, res, data, 200)
}

module.exports = {
    listarCarroController,
    agregarCarroController,
    eliminarCarroController
}

