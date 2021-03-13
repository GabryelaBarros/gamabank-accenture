const User = require('../models/user')
const repository = require('../repository/user.repository')



const createAccount = async (newUser) => {
    const userFromDb = await repository.find(newUser)

    if (userFromDb.length === 0) {
        repository.save(newUser)
    }

    return userFromDb.length > 0 ? userFromDb : newUser
}




module.exports = { createAccount }