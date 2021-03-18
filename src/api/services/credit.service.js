const userService = require('./user.service')
const bankAccountService = require('./bankaccount.service')
const CreditNotAvailable = require('../../helpers/expections/creditnotavaliable.exception')
const creditRepository = require('../repository/credit.repository')


const entryCreditExpense = async (creditExpense) => {
    const bankAccount = await bankAccountService.findAccountByCc(creditExpense.cc)


    processCreditExpense(bankAccount, creditExpense.value)

    registarCompraCredito(creditExpense)
    // const userId = await userService.findIdByCpf({ cpf: creditExpense.cpf })

    //const bankAccount = await bankAccountService.findAccountByUserId(cc)

    //return processCreditExpense(bankAccount, creditExpense)

}

//VERIFICAR SE TEM LIMITE DISPONÍVEL
const processCreditExpense = async (bankAccount, value) => {

    
    if (bankAccount.creditBalanceAvailable < value) {
        throw new CreditNotAvailable()
    }
  
    bankAccount.creditBalanceAvailable -= value

    console.log(' conta pos operacao', bankAccount)
    bankAccountService.updateCreditBalanceAvailable(bankAccount)
}

const registarCompraCredito = async (creditExpense) => {
    const compraRegistrada = await creditRepository.inserirComprarCredito(creditExpense)
    return compraRegistrada
}

module.exports = { entryCreditExpense }

