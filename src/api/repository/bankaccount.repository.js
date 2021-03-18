const database = require('../../helpers/database')

const saveBankAccount = async (bankAccount) => {
    const query = `INSERT INTO bankAccount (balance, maxCredit,invoicePostings, userId)` +
    `VALUES (${bankAccount.balance},${bankAccount.maxCredit}, ${bankAccount.invoicePostings},${bankAccount.userId});`

    return await database.executeQuery(query)
}
      
const findAccountByUserId = async (userId) => {
    const query = `SELECT * FROM bankAccount `+
        `WHERE bankAccount.userId = ${userId};`

    return await database.executeQuery(query)
}

const updateMaxCredit = async (bankAccount) =>{
    const query = `UPDATE bankAccount SET maxCredit = ${bankAccount.maxCredit} ` +
    `WHERE cc = ${bankAccount.cc};`
    return await database.executeQuery(query)

}

const updateBalance = async (bankAccount) => {
    const query = `UPDATE bankaccount SET balance = balance + ${bankAccount.balance} WHERE userId=${bankAccount.userId};`
    return await database.executeQuery(query)
}

module.exports = { saveBankAccount, findAccountByUserId, updateMaxCredit, updateBalance }
