const User = require('../models/user')
const repository = require('../repository/user.repository')



const createAccount = async (newUser) => {
    const dataFromDb = await repository.find(newUser)

    if (dataFromDb.length === 0) {
        repository.save(newUser)
    }
    
    const dataCheck = dataFromDb.length <= 0 ? true : false
    console.log(dataCheck);

    return dataCheck
}

module.exports = { createAccount }