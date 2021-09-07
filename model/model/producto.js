const { Schema , model } = require('mongoose')

const productoSchema = new Schema({
    nombre: String,
    precio: Number,
    thumbnail: String,
    descripcion: String,
    codigo: String,
    stock:Number,
})

module.exports = model('Producto', productoSchema)


