const database = require('../../helpers/database')
const crypto = require('../../helpers/mycrypto')

const findUserByLoginOrCpf = async (user) => {
    const query = `SELECT * FROM users WHERE cpf = "${user.cpf}"` +
        `OR login = "${user.login}";`

    return await database.executeQuery(query)
}

const saveUser = async (user) => {
    const encrypt = await crypto.encryptPassword(user.password, null)
    console.log(encrypt)
    user.salt = encrypt.salt
    user.password = encrypt.encryptedPassword

    const query = `INSERT INTO users (name, cpf, login, password, salt)` +
        `VALUES ("${user.name}", "${user.cpf}", "${user.login}", "${user.password}",` +
        `"${user.salt}");`

    return await database.executeQuery(query)

}

const findIdByCpf = async (user) => {
    const query = `SELECT id FROM users WHERE cpf = "${user.cpf}";`
    return await database.executeQuery(query)
}

module.exports = { findUserByLoginOrCpf, saveUser, findIdByCpf }