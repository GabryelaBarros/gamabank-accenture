const service = require('../services/user.service')
const User = require('../models/user')


const newAccount = async (request, h) => {

    const user = new User(request.payload)

    const passLength = user.password.length

    console.log(user)
    let dataCheck

    try {
        dataCheck = await service.createAccount(user)
    } catch (exception) {
        return h.response({
            message: exception.name
        }).code(exception.status)
    }

    if (dataCheck) {
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