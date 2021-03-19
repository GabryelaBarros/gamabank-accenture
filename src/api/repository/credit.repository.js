const database = require('../../helpers/database')

const createCreditExpense = async (creditExpense) => {
    const query = `INSERT INTO credit (cc, value) ` +
        `VALUES (${creditExpense.cc}, ${creditExpense.value});`

    return await database.executeQuery(query)
}

const listCreditExpenses = async (cc) => {
    const query = `SELECT value, created_at ` +
        `FROM credit` +
        ` WHERE cc = ${cc} ` +
        `ORDER BY created_at DESC`
    return await database.executeQuery(query)
}

module.exports = { createCreditExpense, listCreditExpenses }