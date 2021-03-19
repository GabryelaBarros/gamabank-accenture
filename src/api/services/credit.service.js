const bankAccountService = require('./bankaccount.service')
const CreditNotAvailable = require('../../helpers/expections/creditnotavaliable.exception')
const creditRepository = require('../repository/credit.repository')

const entryCreditExpense = async (creditExpense) => {
    const bankAccount = await bankAccountService.findAccountByCc(creditExpense.cc)

    processCreditExpense(bankAccount, creditExpense.value)

    createCreditExpense(creditExpense)

}

const processCreditExpense = async (bankAccount, expenseValue) => {
    if (bankAccount.creditBalanceAvailable < expenseValue) {
        throw new CreditNotAvailable()
    }

    bankAccount.creditBalanceAvailable -= expenseValue

    console.log(' conta pos operacao', bankAccount)
    bankAccountService.updateCreditBalanceAvailable(bankAccount)
}

const createCreditExpense = async (creditExpense) => {
    const compraRegistrada = await creditRepository.createCreditExpense(creditExpense)
    return compraRegistrada
}

// const listarComprasCredito = async (cc) => {
//     const listaDeCompras = await creditRepository.listarComprasCredito(cc)
//     return listaDeCompras

// }

module.exports = { entryCreditExpense }