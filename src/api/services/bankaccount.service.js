
const BankAccount = require('../models/bank.account')
const repository = require('../repository/bankaccount.repository')


const createBankAccount = (userId) => {
    console.log(' USER ID ', userId)
    const bankAccountCreated = new BankAccount({ userId, balance: 0, maxCredit: 200, invoicePostings: 0 })


    repository.saveBankAccount(bankAccountCreated)
    console.log(' BANK ACCOUNT CREATED', bankAccountCreated)
}


const findAccountByUserId = (userId) =>{
    repository.findAccountByUserId(userId)
}

module.exports = { createBankAccount, findAccountByUserId }

