const service = require('../services/user.service')
const User = require('../models/user')


const newUser = async (request, h) => {

    const user = new User(request.payload)

    console.log(user)

    let newCreateUser//mudar depóis
    
    try {
        newCreateUser = await service.createUser(user)
    } catch (exception) {
        console.log(exception);
        return h.response({
            message: exception.message
        }).code(exception.status)
    }

    if (newCreateUser) {
        return h.response({
            message: 'cadastrado com sucesso'
        }).code(201)

    } else {
        return h.response({
            message: 'o usuário já está cadastrado'
        }).code(409) // ver se o erro é o certo
    }

}

module.exports = { newUser }