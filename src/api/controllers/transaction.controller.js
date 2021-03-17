const service = require('../services/user.service')


const  newTransaction = async (request, res) => {
    console.log("qualquer coisa")
    return res.response({
        message: 'meu momo'
    }).code(409) 
}

module.exports = {newTransaction}