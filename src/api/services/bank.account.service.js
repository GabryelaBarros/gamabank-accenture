
const BankAccount = require('../models/bank.account')
const repository = require('../repository/bank.account.repository')


const createBankAccount = (userId) => {
    console.log(' USER ID ', userId)
    const bankAccountCreated = new BankAccount({ userId, balance: 0, maxCredit: 200, invoicePostings: 0 })


    repository.saveBankAccount(bankAccountCreated)
    console.log(' BANK ACCOUNT CREATED', bankAccountCreated)
}

module.exports = { createBankAccount }

