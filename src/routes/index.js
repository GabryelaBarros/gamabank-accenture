
const { status } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')
const creditController = require('../api/controllers/credit.controller') 
const transactionController = require('../api/controllers/transaction.controller')


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
    handler: userController.newUser //colocar novas rotas para validação de cpf e de senha?
}

const credit = {
    method: 'POST',
    path: '/credit/expense',
    handler: creditController.creditExpense //verificar se o nome tá bom
}

const transaction ={
    method: 'PUT',
    path:'/transaction',
    handler: transactionController.newTransaction
}


module.exports = [ root, login, validate, newuser, credit , transaction]
