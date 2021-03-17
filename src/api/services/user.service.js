const repository = require('../repository/user.repository')
const PasswordLengthException = require('../../helpers/expections/password.exception')
const CPF = require('cpf')
const InvalidCpfException = require('../../helpers/expections/invalidcpf.exception')
const bankAccountService = require('./bankaccount.service')


const createUser = async (newUser) => {
    validateUserPassword(newUser)

    validateUserCpf(newUser)

    const isUserInDb = await findUserByLoginOrCpf(newUser)

    if (isUserInDb) {
        const userSavedOnDb = await repository.saveUser(newUser)
        console.log(userSavedOnDb)
        bankAccountService.createBankAccount(userSavedOnDb.insertId)
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

const findUserByLoginOrCpf = async (user) => {
    const usersFromDb = await repository.findUserByLoginOrCpf(user)

    console.log("resultado da busca de novo usuário no banco")
    return usersFromDb.length === 0
}

const findIdByCpf = async (user) => {
    const [userId] = await repository.findIdByCpf(user)
    return userId.id

}

module.exports = { createUser, findUserByLoginOrCpf, findIdByCpf }