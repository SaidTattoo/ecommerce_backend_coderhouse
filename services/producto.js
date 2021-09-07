const { getAll, getById, edit, deleteById, save } = require("../model/dao/producto")

const listarProductosService = async () => {
    return getAll()
}
const buscarPorIdService = async (id) => {
    return getById(id)
}
const editarService = (id, body) => {
    return edit(id, body)
}
const eliminarService = (id) => {
    return deleteById(id)
}
const guardarService = (body) => {
    return save(body)
}

module.exports = {
    listarProductosService,
    buscarPorIdService,
    editarService,
    eliminarService,
    guardarService
}