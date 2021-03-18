
const { status } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')
const expenseController = require('../api/controllers/expenses.controller')
const invoiceController = require('../api/controllers/invoice.controller')
const statementController = require('../api/controllers/statement.controller')
const transactionController = require('../api/controllers/transaction.controller')

const ApiDocs = require('./apidocs')

const Joi = require('joi')

const root = {
    method: 'GET',
    path: '/',
    handler: status,
    options: {
        tags: ['api'],
        description: 'Verificação do status da aplicação',
        notes: 'Pode ser utilizado sempre que outra aplicação estiver monitorando'
    }
}

const login = {
    method: 'POST',
    path: '/login',
    handler: authController.login,
    options: ApiDocs.login
}

const validate = {
    method: 'GET',
    path: '/login/verify',
    handler: authController.validate
}

const newuser = {
    method: 'POST',
    path: '/signup',
    handler: userController.newUser, //TODO colocar novas rotas para validação de cpf e de senha?
    options: ApiDocs.newUser
}

//TODO autenticar essa rota
const expenses = {
    method: 'POST',
    path: '/expense',
    handler: expenseController.processExpense,
    options: ApiDocs.expenses//TODO verificar se o nome tá bom
}

const invoice = {
    method: 'GET',
    path: '/invoice/{cc?}',
    handler: invoiceController.pendingInvoice,
    options: ApiDocs.invoice
}

const statement = {
    method: 'GET',
    path: '/statement/{cc?}',
    handler: statementController.bankStatement,
    options: ApiDocs.statement
}

const transaction ={
    method: 'PUT',
    path:'/transaction',
    handler: transactionController.newTransaction
}

module.exports = [root, login, validate, newuser, expenses, invoice, statement, transaction]
