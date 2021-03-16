const repository = require('../repository/user.repository')
const PasswordLengthException = require('../../helpers/expections/passwordlength.exception')
const CPF = require('cpf')
const InvalidCpfException = require('../../helpers/expections/invalidcpf.exception')
const service = require('./bank.account.service')


const createUser = async (newUser) => {
    validateUserPassword(newUser)

    validateUserCpf(newUser)

    const isUserInDb = await findUser(newUser)

    if (isUserInDb) {
        const userSavedOnDb = await repository.saveUser(newUser)
        console.log(userSavedOnDb)
        service.createBankAccount(userSavedOnDb.insertId)
    }
    
    console.log("New User created " + isUserInDb)

    return isUserInDb
}

const validateUserPassword = newUser => {
    if (newUser.password.length <= 6) {
        console.log('invalid pass')
        throw new PasswordLengthException()
    }
}

const validateUserCpf = user => {
    const isValidCpf = CPF.isValid(user.cpf)

    if (!isValidCpf) {
        throw new InvalidCpfException()
    }

    console.log('CPF ' + isValidCpf)
}

 const findUser = async (newUser) => {
    const usersFromDb = await repository.findUserByLoginOrCpf(newUser)

    console.log("resultado da busca de novo usuário no banco")
    return usersFromDb.length === 0
}

module.exports = { createUser }



