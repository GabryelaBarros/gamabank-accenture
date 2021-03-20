
const InvalidCcException = require('../../helpers/expections/InvalidCcException')
const BankAccount = require('../models/bankaccount')
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

const updateBalance = async (bankAccount) => {
    return await bankAccountRepository.updateBalance(bankAccount)
}

const findAccountByCc = async (cc) => {
    const bankAccount = await bankAccountRepository.findAccountByCc(cc)

    if (!bankAccount) {
        throw new InvalidCcException()
    }
    console.log('findAccountByCc', bankAccount)
    return new BankAccount(bankAccount)

}

const findAccountByUserId = async (userId) => {
    const [bankAccount] = await bankAccountRepository.findAccountByUserId(userId)
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
    return repository.updateBalance(bankAccount)
}

module.exports = {
    createBankAccount,
    updateCreditBalanceAvailable,
    findAccountByCc,
    validateCc,
    updateBalance,
    findAccountByUserId
}
