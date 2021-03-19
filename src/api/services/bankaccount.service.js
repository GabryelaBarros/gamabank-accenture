
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
        creditBalanceAvailable: INITIAL_BANKACCOUNT_CREDIT
    })

    repository.saveBankAccount(bankAccountCreated)
    console.log(' BANK ACCOUNT CREATED', bankAccountCreated)
}

const updateCreditBalanceAvailable = async (bankAccount) => {
    return repository.updateCreditBalanceAvailable(bankAccount)
}

const findAccountByCc = async (cc) => {
    const [bankAccount] = await repository.findAccountByCc(cc)
    console.log('findAccountByCc', bankAccount)
    return new BankAccount(bankAccount)
}

module.exports = { createBankAccount, updateCreditBalanceAvailable, findAccountByCc }
