const bankAccountService = require('./bankaccount.service')
const CreditNotAvailable = require('../../helpers/expections/creditnotavaliable.exception')
const creditRepository = require('../repository/credit.repository')

const entryCreditExpense = async (creditExpense) => {
    const bankAccount = await bankAccountService.findAccountByCc(creditExpense.cc)

    await processCreditExpense(bankAccount, creditExpense.value)

    await createCreditExpense(creditExpense)

}

const processCreditExpense = async (bankAccount, expenseValue) => {
    if (bankAccount.creditBalanceAvailable < expenseValue) {
        throw new CreditNotAvailable()
    }

    bankAccount.creditBalanceAvailable -= expenseValue

    console.log(' conta pos operacao', bankAccount)
    await bankAccountService.updateCreditBalanceAvailable(bankAccount)
}

const createCreditExpense = async (creditExpense) => {
    const createdExpense = await creditRepository.createCreditExpense(creditExpense)
    return createdExpense
}

// const listarComprasCredito = async (cc) => {
//     const listaDeCompras = await creditRepository.listarComprasCredito(cc)
//     return listaDeCompras

// }

module.exports = { entryCreditExpense }