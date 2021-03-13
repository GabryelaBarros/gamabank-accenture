const service = require('../services/user.service')
const User = require('../models/user')


const newAccount = async (request, h) => {

    const user = new User(request.payload)
    console.log(user)
    const dataCheck = await service.createAccount(user)

    if(dataCheck === true){
        h.response({
            message: 'cadstrado com sucesso'
        }).code(201)    
    }
    
    
    return 

    


}


module.exports = { newAccount }