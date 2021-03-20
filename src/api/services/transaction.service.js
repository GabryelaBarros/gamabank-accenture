const bankAccountService = require('./bankaccount.service')
const CPF = require('cpf')
const InvalidCpfException = require('../../helpers/expections/invalidcpf.exception')
const InvalidBankName = require ('../../helpers/expections/bankname.exception')
const InvalidBalance = require('../../helpers/expections/balanceunvailable.exception')
const AccountInvalid = require('../../helpers/expections/invalidaccount.exception')


const makeTransaction = async (transaction) => {
    const ID_USER_HOLDER = transaction.idUserHolder
    const ID_USER_DESTINY = transaction.idUserDestiny
    const AMOUNT = transaction.amount
    const TYPE = transaction.type
    const CPF_USER_DESTINY = transaction.cpfUserDestiny
    const BANK_NAME = transaction.bankName
    
    
    const ACCOUNT_HOLDER = await bankAccountService.findAccountByUserId(ID_USER_HOLDER)

    if (ACCOUNT_HOLDER === null){
        throw new AccountInvalid("Holder account not exist..") 
    } 
    else{
        if (ACCOUNT_HOLDER.balance - AMOUNT >= 0) { //VERIFICANDO SE O SALDO DA CONTA DO CORRENTISTA APOS A TRANSACAO VAI SER MAIOR OU IGUAL A 0
            if (TYPE === "inner"){
                const ACCOUNT_DESTINY = await bankAccountService.findAccountByUserId(ID_USER_DESTINY)
                if (ACCOUNT_DESTINY === null){
                    throw new AccountInvalid("Destiny account not exist.")
                }
                else{ 
                    bankAccountService.updateBalance({
                        userId : ID_USER_HOLDER,
                        balance: -AMOUNT
                     })
                
                    bankAccountService.updateBalance({
                        userId : ID_USER_DESTINY,
                        balance: AMOUNT
                    })
                    console.log("Transferência entre contas GamaBank realizada com sucesso.")
                    //TODO ADICIONAR NO EXTRATO A TRANSFERENCIA INTERNA
                }
            }
            else if(TYPE === "outer"){
                if(CPF.isValid(CPF_USER_DESTINY) ){
                    if (BANK_NAME != "" && BANK_NAME != null && BANK_NAME != undefined){
                        bankAccountService.updateBalance({ 
                            userId : ID_USER_HOLDER,
                            balance: -AMOUNT
                        })
                        console.log("Transferência externa realizada com sucesso.")
                         //TODO ADICIONAR NO EXTRATO A TRANSFERENCIA EXTERNA
                    }
                    else{
                        throw new InvalidBankName()
                    }
                }  
                else{
                    throw new InvalidCpfException()
                }
            }
        }
        else{ 
            throw new InvalidBalance()
        }
    }
}
module.exports = { makeTransaction }