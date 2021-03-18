class BankAccount {
    constructor({ cc, userId, balance, maxCredit, creditBalanceAvailable, invoice }) {
        this.cc = cc
        this.userId = userId
        this.balance = balance
        this.maxCredit = maxCredit
        this.creditBalanceAvailable = creditBalanceAvailable
        this.invoice = invoice
    }
}

module.exports = BankAccount