const userService = require('../services/user.service')
const User = require('../models/user')


const newUser = async (request, h) => {

    const user = new User(request.payload)

    console.log(user)

    let newCreateUser
    
    try {
        newCreateUser = await userService.createUser(user)
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
        }).code(409)
    }

}

module.exports = { newUser }