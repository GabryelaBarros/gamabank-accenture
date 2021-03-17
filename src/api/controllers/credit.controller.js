const CreditExpense = require('../models/credit')
const service = require('../services/credit.service')

const creditExpense = async (request, h) => {

    const creditExpense = new CreditExpense(request.payload)
    console.log(creditExpense)

    try {
        await service.entryCreditExpense(creditExpense)
        
    } catch (exception) {
        console.log(exception)
        return h.response({
            message: exception.message
        }).code(exception.status)
    }

    return h.response({
        message: 'transação aprovada'
    }).code(200)
}

module.exports = { creditExpense }