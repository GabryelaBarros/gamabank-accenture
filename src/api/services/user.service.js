const repository = require('../repository/user.repository')
const PasswordLengthException = require('../../helpers/expections/passwordlength.exception')
const CPF = require('cpf')
const InvalidCpfException = require('../../helpers/expections/invalidcpf.exception')

const createAccount = async (newUser) => {
    validateUserPassword(newUser)

    validateUserCpf(newUser)

    const findNewUser = await repository.find(newUser)
    if (findNewUser.length === 0) {

        repository.save(newUser)
    }

    const isNewUsercreated = findNewUser.length <= 0 ? true : false
    console.log("New User created " + isNewUsercreated)

    return isNewUsercreated
}


const validateUserPassword = newUser => {
    if (newUser.password.length <= 6) {
        console.log(' invalid pass');
        throw new PasswordLengthException()
    }
}

const validateUserCpf = user => {
    const isValidCpf = CPF.isValid(user.cpf)

    if(!isValidCpf){
        throw new InvalidCpfException()
    }

    console.log('CPF ' + isValidCpf);
}


module.exports = { createAccount }

