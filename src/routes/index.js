
const { status } = require('../api/controllers/app.controller')
const authcontroller = require('../api/controllers/auth.controller')
const usercontroller = require('../api/controllers/user.controller')

const root = {
    method: 'GET',
    path: '/',
    handler: status
}

const login = {
    method: 'POST',
    path: '/login',
    handler: authcontroller.login
}

const validate = {
    method: 'GET',
    path: '/login/verify',
    handler: authcontroller.validate
}

const newaccount = {
    method: 'POST',
    path: '/signup',
    handler: usercontroller.newAccount
}


module.exports = [ root, login, validate, newaccount ]