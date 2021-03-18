class BankAccount {
    constructor({ cc, userId, balance, maxCredit, extractRelease, invoicePostings }) {
        this.cc = cc
        this.userId = userId
        this.balance = balance
        this.maxCredit = maxCredit
        this.extractRelease = extractRelease
        this.invoicePostings = invoicePostings
    }
}

module.exports = BankAccount