const service = require('../services/user.service')
const User = require('../models/user')


const newAccount = async (request, h) => {

    const user = new User(request.payload)
    console.log(user);
    const userCheck = await service.createAccount(user)
    return userCheck

}


module.exports = { newAccount }