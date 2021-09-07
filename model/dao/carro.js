const carro = require("../model/carro")

const listCar = async () => {
    let carroDB = await carro.find()
    return carroDB
}

const addToCar = async(id, idprod) => {
    let carroDB = await carro.updateOne({idprod})
    return carroDB
}

const removeToCar = async() => {
    let carroDB = await carro.findByIdAndUpdate(id, idprod)
    return "QUITANDO"
}


module.exports = {
    listCar,
    addToCar,
    removeToCar
}