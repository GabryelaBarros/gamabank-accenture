const service = require('../services/user.service')
const User = require('../models/user')


const newAccount = async (request, h) => {

    const user = new User(request.payload)

    console.log(user)

    let newCreateAccount
    
    try {
        newCreateAccount = await service.createAccount(user)
    } catch (exception) {
        return h.response({
            message: exception.message
        }).code(exception.status)
    }

    if (newCreateAccount) {
        return h.response({
            message: 'cadastrado com sucesso'
        }).code(201)

    } else {
        return h.response({
            message: 'o usuário já está cadastrado'
        }).code(433) // ver se o erro é o certo
    }

}

module.exports = { newAccount }