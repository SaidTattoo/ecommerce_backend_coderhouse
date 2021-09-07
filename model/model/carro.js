const { Schema , model } = require('mongoose')

const productoSchema = new Schema({
    nombre: String,
    precio: Number,
    thumbnail: String,
    descripcion: String,
    codigo: String,
    stock:Number,
})

const CarroSchema = new Schema({
    productos: [ productoSchema ]
})

module.exports = model('Carrito', CarroSchema)