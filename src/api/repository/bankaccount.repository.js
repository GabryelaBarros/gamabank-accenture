const database = require('../../helpers/database')

const saveBankAccount = async (bankAccount) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `INSERT INTO bankAccount (balance, maxCredit, invoicePostings, userId)` +
                `VALUES (${bankAccount.balance}, ${bankAccount.maxCredit}, ${bankAccount.invoicePostings}, ${bankAccount.userId})`
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

const findAccountByUserId = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `SELECT * FROM bankAccount WHERE bankAccount.userId = ${userId}`
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

module.exports = { saveBankAccount, findAccountByUserId }

