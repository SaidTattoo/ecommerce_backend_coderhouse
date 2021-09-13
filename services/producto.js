const { getAll, getById, edit, deleteById, save, search } = require("../model/dao/producto")

const listarProductosService = async ( key, nombre) => {
    return getAll( key, nombre)
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

const buscarService = (key,params) => {
    return search(key,params)
}

module.exports = {
    listarProductosService,
    buscarPorIdService,
    editarService,
    eliminarService,
    guardarService,
    buscarService
}