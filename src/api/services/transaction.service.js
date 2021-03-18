const bankAccountService = require('./bankaccount.service')
const CPF = require('cpf')
const InvalidCpfException = require('../../helpers/expections/invalidcpf.exception')



const makeTransaction = async (transaction) => {
    const ID_ACCOUNT_HOLDER = transaction.idAccountHolder
    const ID_USER_DESTINY = transaction.idUserDestiny
    const AMOUNT = transaction.amount
    const TYPE = transaction.type
    const CPF_USER_DESTINY = transaction.cpfUserDestiny
    const BANK_NAME = transaction.bankName
    
    const ACCOUNT_HOLDER = await bankAccountService.findAccountByUserId(ID_ACCOUNT_HOLDER)
    if (ACCOUNT_HOLDER.balance - AMOUNT >= 0) //SE O POSSIVEL RESULTADO DA TRANSFERENCIA FOR MAIOR OU IGUAL A ZERO, ENTAO CONTINUE COM A TRANSACAO
    {
        if (TYPE === "inner"){
            bankAccountService.updateBalance({ //RETIRANDO O VALOR DA CONTA QUE ESTA TRANSFERINDO A QUANTIA
                userId : ID_ACCOUNT_HOLDER,
                balance: -AMOUNT
            })
            bankAccountService.updateBalance({ //ADICIONANDO O VALOR DA CONTA QUE ESTA RECEBENDO A QUANTIA
                userId : ID_USER_DESTINY,
                balance: AMOUNT
            })
            console.log("transferencia interna realizada com sucesso")
            //TODO ADICIONAR NO EXTRATO A TRANSFERENCIA INTERNA
        }
        else if(TYPE === "outer"){
                if(CPF.isValid(CPF_USER_DESTINY) ){
                    if (BANK_NAME != "" && BANK_NAME != null && BANK_NAME != undefined){
                        bankAccountService.updateBalance({ //RETIRANDO O VALOR DA CONTA QUE ESTA TRANSFERINDO A QUANTIA
                            userId : ID_ACCOUNT_HOLDER,
                            balance: -AMOUNT
                        })
                        console.log("transferencia externa realizada com sucesso")
                        //TODO ADICIONAR NO EXTRATO A TRANSFERENCIA EXTERNA
                    }
                } else{
                    throw new InvalidCpfException()
                }
        }
    } 


    console.log(`èstou no makeTransaction ${transaction.idAccountHolder}`)
}
module.exports = { makeTransaction }