const userService = require('./user.service')
const bankAccountService = require('./bankaccount.service')
const CreditNotAvailable = require('../../helpers/expections/creditnotavaliable.exception')


const entryCreditExpense = async (creditExpense) => {
    const userId = await userService.findIdByCpf({ cpf: creditExpense.cpf })

    const bankAccount = await bankAccountService.findAccountByUserId(userId)

    return processCreditExpense(bankAccount, creditExpense)

}

const processCreditExpense = async (bankAccount, creditExpense) => {
    if (bankAccount.maxCredit < creditExpense.value) {
        throw new CreditNotAvailable()
    }

    bankAccount.maxCredit -= creditExpense.value

    console.log(' conta pos operacao', bankAccount)
    bankAccountService.updateMaxCredit(bankAccount)
}

module.exports = { entryCreditExpense }

