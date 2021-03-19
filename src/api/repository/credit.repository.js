const database = require('../../helpers/database')

const createCreditExpense = async (creditExpense) => {
    const query = `INSERT INTO credit (cc, value) ` +
        `VALUES (${creditExpense.cc}, ${creditExpense.value});`

    return await database.executeQuery(query)
}

// const listarComprasCredito = async (cc) => {
//     const query = `SELECT * FROM credit` +
//         ` WHERE cc = ${cc} ` +
//         `ORDER BY created_at DESC`
// }

module.exports = { createCreditExpense }