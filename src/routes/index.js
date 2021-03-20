
const { status } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')
const expenseController = require('../api/controllers/expenses.controller')
const invoiceController = require('../api/controllers/invoice.controller')
const statementController = require('../api/controllers/statement.controller')

const root = {
    method: 'GET',
    path: '/',
    handler: status
}

const login = {
    method: 'POST',
    path: '/login',
    handler: authController.login
}

const validate = {
    method: 'GET',
    path: '/login/verify',
    handler: authController.validate
}

const newuser = {
    method: 'POST',
    path: '/signup',
    handler: userController.newUser //TODO colocar novas rotas para validação de cpf e de senha?
}

//TODO autenticar essa rota
const expenses = {
    method: 'POST',
    path: '/expense',
    handler: expenseController.processExpense //TODO verificar se o nome tá bom
}

const invoice = {
    method: 'GET',
    path: '/invoice/{cc?}',
    handler: invoiceController.pendingInvoice
}

const statement = {
    method: 'GET',
    path: '/statement/{cc?}',
    handler: statementController.bankStatement
}

module.exports = [root, login, validate, newuser, expenses, invoice,statement]
