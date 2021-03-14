class PasswordLengthException extends Error {
    constructor(message, status) {
        super(message) // (1)
        this.name = 'A senha do usuario nao pode ser menor que 6 digitos'
        this.status = 406
    }
}


module.exports = PasswordLengthException