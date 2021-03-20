const bankAccountService = require('./bankaccount.service')
const BalanceNotAvailable = require('../../helpers/expections/balancenotavaliable.exception')
const expenseRepository = require('../repository/expenses.repository')

const INVOICE_INITIAL_VALUE = 0

const entryExpense = async (expense) => {
    const bankAccount = await bankAccountService.findAccountByCc(expense.cc)

    await processExpense(bankAccount, expense)

    await createExpense(expense)

}

const processExpense = async (bankAccount, expense) => {
    if (expense.isCredit) {
        await processCreditExpense(bankAccount, expense)
    } else {
        await processDebitExpense(bankAccount, expense)
    }
}

const summarizeExpenses = (expenses) => {
    const summarizeExpense = (accumulator, expense) => accumulator + parseFloat(expense.value)

    const amountExpenses = expenses.reduce(summarizeExpense, INVOICE_INITIAL_VALUE)
    return amountExpenses
}

const createExpense = async (expense) => {
    const createdExpense = await expenseRepository.createExpense(expense)
    return createdExpense
}

const processCreditExpense = async (bankAccount, expense) => {
    console.log(bankAccount)
    console.log(expense)
    if (bankAccount.creditBalanceAvailable < expense.value) {
        throw new BalanceNotAvailable()
    }

    bankAccount.creditBalanceAvailable -= expense.value

    await bankAccountService.updateCreditBalanceAvailable(bankAccount)
}

const processDebitExpense = async (bankAccount, expense) => {
    console.log(expense)
    if (bankAccount.balance < expense.value) {
        throw new BalanceNotAvailable()
    }

    bankAccount.balance -= expense.value

    await bankAccountService.updateBalance(bankAccount)
}

const listCreditExpenses = async (cc, isCredit) => {
    const expenses = await expenseRepository.listCreditExpenses(cc, isCredit)
    return expenses
}

module.exports = {
    entryExpense,
    summarizeExpenses,
    processCreditExpense,
    processCreditExpense,
    listCreditExpenses
}