class BankAccount {
    constructor({ cc, userId, balance, maxCredit, creditBalanceAvailable, faturaParcial }) {
        this.cc = cc
        this.userId = userId
        this.balance = balance
        this.maxCredit = maxCredit
        this.creditBalanceAvailable = creditBalanceAvailable
        this.faturaParcial = faturaParcial
    }
}

module.exports = BankAccount