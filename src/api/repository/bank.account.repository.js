const database = require('../../helpers/database')

const findByCpfLogin = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {

            const sqlStatement = `SELECT * FROM users WHERE cpf = "${user.cpf}"` +
            `OR login = "${user.login}";`
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

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

module.exports = { findByCpfLogin, saveBankAccount }

