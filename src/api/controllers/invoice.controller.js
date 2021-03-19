// const Invoice = require('../models/invoice')
const invoiceService = require('../services/invoice.service')

const pendingInvoice = async (request, h) => {
    const cc = request.params.cc

    try {
        return await invoiceService.getPendingInvoiceByCc(cc)
    } catch (exception) {
        console.log(exception);
        return h.response({
            message: exception.message
        }).code(exception.status)
    }



}

module.exports = { pendingInvoice }