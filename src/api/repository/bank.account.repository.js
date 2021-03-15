const database = require('../../helpers/database')

const saveBankAccount = async (bankAccount) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `INSERT INTO bankAccount (balance, credit, receipt, user)` +
                `VALUES (${bankAccount.balance}, ${bankAccount.credit}, ${bankAccount.receipt}, ${bankAccount.userId})`
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

module.exports = { saveBankAccount }

