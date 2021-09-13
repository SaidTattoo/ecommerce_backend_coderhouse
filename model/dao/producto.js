
const producto = require("../model/producto")


const search = async (key, nombre) => {
    console.log(key, nombre)
    let productosDB = await producto.find()
    return productosDB
}

const getAll = async (key ="", nombre="") => {
    
    if(key || nombre){
        let productosDB = await producto.find()
        let prodFilter = productosDB.filter((e) => e[key] == nombre ) 
        return prodFilter 
    }
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