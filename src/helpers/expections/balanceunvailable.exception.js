const MESSAGE = 'Balance not available for transaction.'

class balanceNotAvailable extends Error {
    constructor() {
        super(MESSAGE)
        this.message = MESSAGE
        this.status = 406
    }
}


module.exports = balanceNotAvailable