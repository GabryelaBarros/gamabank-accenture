const userService = require('./user.service')
const bankAccountService = require('./bankaccount.service')


const entryCreditExpense = async (creditExpense) => {
    const userId = await userService.findIdByCpf({ cpf: creditExpense.cpf })


    await bankAccountService.findAccountByUserId(userId)
}

const verifyCreditBalance = (expense) =>{
   const result = repository.verifyCreditBalancea
   if(result > expense){
       updatdeCreditBalance()
   }
}

// const updatdeCreditBalance = (expense) => {
//     accountService
// }


module.exports = { entryCreditExpense }