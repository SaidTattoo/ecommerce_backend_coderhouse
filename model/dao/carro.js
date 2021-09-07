const carro = require("../model/carro")

const listCar = async () => {
    id = '6136ce9d86990b3b00bde518'
    let carroDB = await carro.findById( id )
    return carroDB
}

const addToCar = async (id, prod) => {
    id = '6136ce9d86990b3b00bde518'
    let data = await carro.findByIdAndUpdate({ _id: id }, {
        $push: {
            productos: prod,
        }
    })

    console.log(data)
    // let carroDB = await carro.update({id},{productos:idpro{idprod}})
    return data
}

const removeToCar = async (id, idProd) => {
    id = '6136ce9d86990b3b00bde518'
    idprod = "6137b56fbe89683a902031f1"
    let data = await carro.findByIdAndUpdate({ _id: id }, {
        $pull: {
            productos: {'_id':idProd },
        }
    })
    return data
}


module.exports = {
    listCar,
    addToCar,
    removeToCar
}