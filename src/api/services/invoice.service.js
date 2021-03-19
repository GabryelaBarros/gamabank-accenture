const bankAccountService = require('./bankaccount.service')
const creditService = require('./credit.service')

const createInvoice = async (cc) => {

    creditService.listarComprasCredito(cc)

}


// const calculateInvoice = async (maxCredit, creditBalanceAvailable) => {
//     const invoice = maxCredit - creditBalanceAvailable
//     console.log('FATURA PENDENTE PARA PAGAMENTO: ', invoice)
//     return invoice
// }


module.exports = { calculateInvoice }