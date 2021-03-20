const userRepository = require('../repository/user.repository')
const PasswordLengthException = require('../../helpers/expections/password.exception')
const CPF = require('cpf')
const InvalidCpfException = require('../../helpers/expections/invalidcpf.exception')
const bankAccountService = require('./bankaccount.service')

const createUser = async (newUser) => {
    validateUserPassword(newUser)

    validateUserCpf(newUser)

    const isUserInDb = await findUserByLoginOrCpf(newUser)

    if (isUserInDb) {
        const userSavedOnDb = await userRepository.saveUser(newUser)
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
    const usersFromDb = await userRepository.findUserByLoginOrCpf(user)

    console.log("result of searching for new user in DB")
    return usersFromDb.length === 0
}

module.exports = { createUser, findUserByLoginOrCpf, validateUserPassword, validateUserCpf }