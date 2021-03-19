const MESSAGE = 'Insufficient Credit Limit'

class CreditNotAvailable extends Error {
    constructor() {
        super(MESSAGE)
        this.message = MESSAGE
        this.status = 400
    }
}

module.exports = CreditNotAvailable