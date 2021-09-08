const { db } = require("../model/carro")
const carro = require("../model/carro")

const listCar = async () => {
    id = '6136ce9d86990b3b00bde518'
    let carroDB = await carro.findById(id)
    return carroDB
}

const addToCar = async (id, prod) => {
    id = '6136ce9d86990b3b00bde518'
    let data = await carro.findByIdAndUpdate({ _id: id }, {
        $push: {
            productos: prod,
        }
    })
    return data
}

const removeToCar = async (id, idProd) => {
   
    var carroDB = await carro.findById(id)
    var prod = JSON.parse(JSON.stringify(carroDB))
    var remodevItem =  prod.productos.filter((e) => e._id !== idProd)
    await carro.findByIdAndUpdate({ _id: id },{productos : remodevItem},{
        new: true,
        runValidators: true,
        context: 'query'
       })
    if(prod) {  
        return remodevItem
    }else{
        return []
    }
    
}




module.exports = {
    listCar,
    addToCar,
    removeToCar
}