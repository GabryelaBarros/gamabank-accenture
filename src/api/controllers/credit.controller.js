const CreditExpense = require('../models/credit')
const service = require('../services/credit.service')

const creditExpense = async (request, h) =>{

    const creditExpense = new CreditExpense(request.payload)
    console.log(creditExpense);
    
    await service.entryCreditExpense(creditExpense)

    return 1
}

module.exports = {creditExpense }