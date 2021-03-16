class BankAccount {
    constructor({ userId, balance, maxCredit, extractRelease, invoicePostings }) {
        this.userId = userId
        this.balance = balance
        this.maxCredit = maxCredit
        this.extractRelease = extractRelease
        this.invoicePostings = invoicePostings
    }
}

module.exports = BankAccount