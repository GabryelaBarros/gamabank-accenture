
const BankAccount = require('../models/bankaccount')
const repository = require('../repository/bankaccount.repository')

const INITIAL_BANKACCOUNT_CREDIT = 200
const INITIAL_BALANCE = 0

const createBankAccount = (userId) => {
    console.log(' USER ID ', userId)
    const bankAccountCreated = new BankAccount({
        userId,
        balance: INITIAL_BALANCE,
        maxCredit: INITIAL_BANKACCOUNT_CREDIT,
        creditBalanceAvailable: INITIAL_BANKACCOUNT_CREDIT,
        invoice: INITIAL_BALANCE
    })

    calculateInvoice(bankAccountCreated.maxCredit,
        bankAccountCreated.creditBalanceAvailable)

    repository.saveBankAccount(bankAccountCreated)
    console.log(' BANK ACCOUNT CREATED', bankAccountCreated)
}

// const findAccountByUserId = async (userId) => {
//     const [bankAccount] = await repository.findAccountByUserId(userId)
//     console.log('findAccountByUserId', bankAccount)
//     return new BankAccount(bankAccount)
// }

const updateCreditBalanceAvailable = async (bankAccount) => {
    return repository.updateCreditBalanceAvailable(bankAccount)
}


const findAccountByCc = async (cc) => {
    const [bankAccount] = await repository.findAccountByCc(cc)
    console.log('findAccountByCc', bankAccount)
    return new BankAccount(bankAccount)
}

const calculateInvoice = async (maxCredit, creditBalanceAvailable) => {
    const invoice = maxCredit - creditBalanceAvailable
    console.log('FATURA PENDENTE PARA PAGAMENTO: ', invoice)
    return invoice
}

module.exports = { createBankAccount, updateCreditBalanceAvailable, findAccountByCc }
