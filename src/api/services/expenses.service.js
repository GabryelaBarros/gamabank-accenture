const bankAccountService = require('./bankaccount.service')
const BalanceNotAvailable = require('../../helpers/expections/balancenotavaliable.exception')
const expenseRepository = require('../repository/expenses.repository')
const Email = require('../modules/email')
const userService = require('./user.service')


const INVOICE_INITIAL_VALUE = 0

const entryExpense = async (expense) => {
    const bankAccount = await bankAccountService.findAccountByCc(expense.cc)
    await processExpense(bankAccount, expense)

    await createExpense(expense)

}

const processExpense = async (bankAccount, expense) => {
    console.log('process expense', expense.isCredit)
    if (expense.isCredit) {
        await processCreditExpense(bankAccount, expense)
    } else {
        await processDebitExpense(bankAccount, expense)
    }

    await sendEmailConfirmExpense(bankAccount,expense)
}

const sendEmailConfirmExpense = async (bankAccount, expense) => {
    const user = await userService.findUserById(bankAccount.userId)
    const expenseType = expense.isCredit ? "Crédito" : "Débito"

    const email = new Email(user.login, 
        `Olá ${user.name} seu lançamento de ${expenseType} foi realizado com sucesso!`, 
        `O valor da sua transacao foi de: R$ ${expense.value} \nO seu crédito disponível é: R$ ${bankAccount.creditBalanceAvailable}`);
    
    console.log(await email.run());
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
    console.log('after debit expense', bankAccount)

    await bankAccountService.updateBalance(bankAccount)
}

const listExpenses = async (cc, isCredit) => {
    const expenses = await expenseRepository.listExpenses(cc, isCredit)
    return expenses
}

module.exports = {
    entryExpense,
    summarizeExpenses,
    processCreditExpense,
    processCreditExpense,
    listExpenses
}