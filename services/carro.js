const { listCar, addToCar, removeToCar } = require("../model/dao/carro")



const listarCarroService = () => {
    return listCar()
}

const agregarCarroService = (id, prod) => {
    return addToCar(id, prod)
}

const eliminarCarroService = (id, idProd) => {
    return removeToCar(id, idProd)
}

module.exports = {
    listarCarroService,
    agregarCarroService,
    eliminarCarroService
}

