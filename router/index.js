const fs = require('fs');
const  express  = require('express');
const router = express.Router()

const pathRouter = `${__dirname}`

const removeExtencion = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExtension = removeExtencion(file)
    const skip = ["index"].includes(fileWithoutExtension)
    if (!skip) {
        router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`))
    }
})

router.get("*", (req, res) => {
    res.status(404).send({ message: "Page Not found " })
})

module.exports = router