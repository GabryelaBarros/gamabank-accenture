const repository = require('../repository/user.repository')
const PasswordLengthException = require('../../helpers/expections/password-length-exception')

const createAccount = async (newUser) => {
    validateUserPassword(newUser)

    const dataFromDb = await repository.find(newUser)
    if (dataFromDb.length === 0) {

        repository.save(newUser)
    }

    const dataCheck = dataFromDb.length <= 0 ? true : false
    console.log(dataCheck)

    return dataCheck
}


const validateUserPassword = newUser => {
    if (newUser.password.length <= 6) {
        throw new PasswordLengthException()
    }
}


module.exports = { createAccount }

