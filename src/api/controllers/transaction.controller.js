const service = require('../services/transaction.service')


const  newTransaction = async (request, res) => {
    service.makeTransaction(request.payload)
    return res.response({
        message: 'teste newTransaction Controller'
    }).code(200) 
}

module.exports = {newTransaction}