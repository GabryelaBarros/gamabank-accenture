const database = require('../../helpers/database')
const crypto = require('../../helpers/mycrypto')

const save = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {

            const encrypt = await crypto.encryptPassword(user.password, null)
            console.log(encrypt)
            user.salt = encrypt.salt
            user.password = encrypt.encryptedPassword

            const sqlStatement = `INSERT INTO users (name, cpf, login, password, salt)` +
            `VALUES ("${user.name}", "${user.cpf}", "${user.login}", "${user.password}", "${user.salt}");`
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}


const find = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {

            const sqlStatement = `SELECT * FROM users WHERE cpf = "${user.cpf}";`
            const result = await database.execute(sqlStatement)

            resolve(result)
            console.log(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}
module.exports = { save, find }