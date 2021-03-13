const service = require('../services/user.service')
const User = require('../models/user')


const newAccount = async (request, h) => {

    const user = new User(request.payload)
    console.log(user)
    const dataCheck = await service.createAccount(user)

    if (dataCheck) {
        return h.response({
            message: 'cadastrado com sucesso'
        }).code(201)

    } else {
        return h.response({
            message: 'o usuário já está cadastrado'
        }).code(433)
    }

}


module.exports = { newAccount }