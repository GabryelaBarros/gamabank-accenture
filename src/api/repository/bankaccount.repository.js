const database = require('../../helpers/database')
const BankAccount = require('../models/bankaccount')

const saveBankAccount = async (bankAccount) => {
    const query = `INSERT INTO bankAccount ` +
        `(balance, maxCredit, creditBalanceAvailable, userId) ` +
        `VALUES (` +
        `${bankAccount.balance},` +
        `${bankAccount.maxCredit},` +
        `${bankAccount.creditBalanceAvailable},` +
        `${bankAccount.userId});`

    return await database.executeQuery(query)
}

const updateCreditBalanceAvailable = async (bankAccount) => {
    const query = `UPDATE bankAccount SET ` +
        `creditBalanceAvailable = ${bankAccount.creditBalanceAvailable} ` +
        `WHERE cc = ${bankAccount.cc};`

    return await database.executeQuery(query)
}

const updateBalance = async (bankAccount) => {
    const query = `UPDATE bankAccount SET ` +
        `balance = ${bankAccount.balance} ` +
        `WHERE cc = ${bankAccount.cc};`

    return await database.executeQuery(query)
}

const findAccountByCc = async (cc) => {
    const query = `SELECT * FROM bankAccount ` +
        `WHERE cc = ${cc};`

    const [dataFromDb] = await database.executeQuery(query)
    return dataFromDb
}
const updateBalance = async (bankAccount) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `UPDATE bankaccount SET balance=${bankAccount.balance} WHERE user=${bankAccount.userId}` 
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

module.exports = { saveBankAccount, findAccountByUserId, updateMaxCredit }

module.exports = {
    saveBankAccount,
    updateCreditBalanceAvailable,
    findAccountByCc,
    updateBalance
}