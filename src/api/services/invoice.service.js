const bankAccountService = require('./bankaccount.service')
const creditService = require('./credit.service')
const Invoice = require('../models/invoice')

const INVOICE_INITIAL_VALUE = 0

const getPendingInvoiceByCc = async (cc) => {
    await bankAccountService.validateCc(cc)
    const expenses = await creditService.listCreditExpenses(cc)

    const summarizeInvoiceAmount = (accumulator, expense) => accumulator + parseFloat(expense.value)
    console.log('expenses list ', expenses)
    const amountInvoice = expenses.reduce(summarizeInvoiceAmount, INVOICE_INITIAL_VALUE)
    console.log('valor total fatura ', amountInvoice)

    const pendingInvoice = new Invoice({ cc, expenses, amount: amountInvoice })

    console.log('fatura formada', pendingInvoice)

    return pendingInvoice

}

const calculateInvoice = async (maxCredit, creditBalanceAvailable) => {
    const invoice = maxCredit - creditBalanceAvailable
    console.log('FATURA PENDENTE PARA PAGAMENTO: ', invoice)
    return invoice
}

//const invoice = new Invoice (cc, expenses, expenses.reduce(amount))

module.exports = { getPendingInvoiceByCc }