const database = require('../../helpers/database')

const inserirComprarCredito = async (creditExpense) => {
    const query = `INSERT INTO credit (cc, creditExpenseValue) ` +
    `VALUES (${creditExpense.cc}, ${creditExpense.value});`

    return await database.executeQuery(query)
}

module.exports = { inserirComprarCredito }