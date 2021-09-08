
const producto = require("../model/producto")


const search = async (params) => {
    let productosDB = await producto.find({producto:{ nombre: params }})
    return productosDB
}

const getAll = async () => {
    let productosDB = await producto.find()
    return productosDB
}

const getById = async (id) => {
    let productoDB = await producto.findById(id)
    return productoDB
}
const edit = async (id, body) => {
    let productoEdit = await producto.findByIdAndUpdate(id, body)
    return productoEdit
}

const deleteById = async (id) => {
    let deleted = await producto.findByIdAndDelete(id)
    return deleted
}
const save = async (body) => {
    let saved = await producto.create(body)
    return saved
}
module.exports = {
    getAll,
    getById,
    edit,
    deleteById,
    save,
    search
}