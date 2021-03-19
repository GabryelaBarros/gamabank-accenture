class BankAccount {
    constructor({ cc, userId, balance, maxCredit, creditBalanceAvailable }) {
        this.cc = cc
        this.userId = userId
        this.balance = balance
        this.maxCredit = maxCredit
        this.creditBalanceAvailable = creditBalanceAvailable
    }
}

module.exports = BankAccount