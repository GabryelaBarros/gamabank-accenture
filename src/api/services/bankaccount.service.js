
const BankAccount = require('../models/bank.account')
const InvalidCcException = require('../../helpers/expections/InvalidCcException')
const bankAccountRepository = require('../repository/bankaccount.repository')

const INITIAL_BANKACCOUNT_CREDIT = 200
const INITIAL_BALANCE = 0

const createBankAccount = async (userId) => {
    console.log(' USER ID ', userId)
    const bankAccountCreated = new BankAccount({
        userId,
        balance: INITIAL_BALANCE,
        maxCredit: INITIAL_BANKACCOUNT_CREDIT,
        creditBalanceAvailable: INITIAL_BANKACCOUNT_CREDIT
    })

    await bankAccountRepository.saveBankAccount(bankAccountCreated)
    console.log(' BANK ACCOUNT CREATED', bankAccountCreated)
}

const updateCreditBalanceAvailable = async (bankAccount) => {
    return await bankAccountRepository.updateCreditBalanceAvailable(bankAccount)
}

const findAccountByCc = async (cc) => {
    const [bankAccount] = await bankAccountRepository.findAccountByCc(cc)

    if (!bankAccount) {
        throw new InvalidCcException()
    }

const findAccountByUserId = async (userId) => {
    const [bankAccount] = await repository.findAccountByUserId(userId)
    console.log('findAccountByUserId', bankAccount)
    if (bankAccount === undefined){
        return null
    }
    else{
        return new BankAccount(bankAccount)
    }
}

const validateCc = async (cc) => {
    return await findAccountByCc(cc)
}

const updateBalance = async (bankAccount) =>{
    return bankAccountRepository.updateBalance(bankAccount)
}


module.exports = { createBankAccount, updateCreditBalanceAvailable, findAccountByCc, validateCc, updateBalance }
