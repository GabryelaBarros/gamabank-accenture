
const { status } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')
const creditController = require('../api/controllers/credit.controller')

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
const credit = {
    method: 'POST',
    path: '/credit/expense',
    handler: creditController.creditExpense //TODO verificar se o nome tá bom
}

module.exports = [root, login, validate, newuser, credit]
