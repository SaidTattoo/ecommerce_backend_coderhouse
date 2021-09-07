const success = (req, res, message, status) => {
    res.status(status || 200).send({
        error:false,
        codeResponse:status,
        body:message 
    })
}

const error = (req, res, message, status) => {
    res.status(status || 500).send({
        error:true,
        codeResponse:status,
        body:message
    })
}

module.exports = {
    success,
    error
}