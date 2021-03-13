const User = require('../models/user')
const repository = require('../repository/user.repository')



const createAccount = async (newUser) => {
    const userFromDb = await repository.find(newUser)

    if (userFromDb.length === 0) {
        repository.save(newUser)
    }
    
    const userCheck = userFromDb.length > 0 ? 'Este usuário possui um cadastro' : 'Novo usuário cadastrado com sucesso!'

    return userCheck
}

module.exports = { createAccount }