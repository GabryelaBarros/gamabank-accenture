const userService = require('./user.service')
const bankAccountService = require('./bankaccount.service')


const entryCreditExpense = async (creditExpense) => {
    const userId = await userService.findIdByCpf({ cpf: creditExpense.cpf })

    const bankAccount = await bankAccountService.findAccountByUserId(userId)

    if (bankAccount.maxCredit > creditExpense.value) {
        bankAccount.maxCredit -= creditExpense.value

        console.log(' conta pos operacao' , bankAccount)
        bankAccountService.updateMaxCredit(bankAccount)
    }

}

// const verifyCreditBalance = (expense) =>{
//    const result = repository.verifyCreditBalancea
//    if(result > expense){
//        updatdeCreditBalance()
//    }
// }


// const updatdeCreditBalance = (expense) => {
//     accountService
// }


module.exports = { entryCreditExpense }