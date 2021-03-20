class accountInvalid extends Error {
    constructor(message) {
        super(message)
        this.message = message
        this.status = 400
    }
}

module.exports = accountInvalid